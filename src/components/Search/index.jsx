import { useState } from 'react'
import './index.css'
import { CloseCircle, SearchNormal1 } from 'iconsax-react';
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
    <CloseCircle className="seach-bar-close" size="32" color="#f47373"
      variant="Bulk"
      onClick={() => {
        setSearchExtend(false);
      }}
    />
    <div>
      <input type="text" placeholder='search...' value={inputValue} onChange={handleInput} />
      <SearchNormal1
        size="24"
        style={{ cursor: "pointer" }}
        color="#000"
        onClick={e => e.target.parentElement.parentElement.submit()}
      />
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
      <SearchNormal1
        size="24"
        color="#000"
        style={{ cursor: "pointer" }}
      />
    </div>
    {isSearchExtend && <ExpandSearch setSearchExtend={setSearchExtend} />}
  </>
  );
}
export default Search;
