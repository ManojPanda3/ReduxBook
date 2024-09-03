import { useState } from 'react'
import './index.css'
const ExpandSearch = ({ setSearchExtend }) => {
  const data = ["hi", "bye"];
  const [inputValue, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(data);
  const handleInput = (e) => {
    const val = e.target.value;
    setValue(val);
    setSuggestions((suggestions) => {
      if (val.length < inputValue.length) suggestions = data;
      return suggestions.filter((sug) => sug.toLowerCase().includes(val.toLowerCase())
      )
    });
  }

  return <form className="search-expand">
    <svg
      className="seach-bar-close"
      xmlns="http://www.w3.org/2000/svg"
      width="32" height="32"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => {
        setSearchExtend(false);
      }}
    >
      <path opacity=".4" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#f47373"></path>
      <path d="m13.06 12 2.3-2.3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.3 2.3-2.3-2.3a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.3 2.3-2.3 2.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.3-2.3 2.3 2.3c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.3-2.3Z" fill="#f47373"></path>
    </svg>
    <div>
      <input type="text" placeholder='search...' value={inputValue} onChange={handleInput} />

      <svg
        onClick={e => e.target.parentElement.parentElement.submit()}
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none"
      >
        <path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        </path>
      </svg>
    </div>
    <ul className='search-suggetions'>{
      suggestions.map((suggestion, index) => (<li key={index} onClick={
        (e) => {
          setValue(e.target.innerText);
          setSuggestions([]);
        }
      }>{suggestion}</li>))
    }</ul>
  </form>
}
const Search = () => {
  const [isSearchExtend, setSearchExtend] = useState(false);
  return (<>
    <div className="search-bar"
      onClick={() => setSearchExtend(true)}
    >
      <p className="search-text">Search</p>
      <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        </path>
      </svg>
    </div>
    {isSearchExtend && <ExpandSearch setSearchExtend={setSearchExtend} />}
  </>
  );
}
export default Search;
