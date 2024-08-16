import { } from 'react'
import './index.css'
import { SearchNormal1 } from 'iconsax-react';
const Search = () => {
  return (<div className="search-bar">
    <p className="search-text">Search</p>
    <SearchNormal1
      size="24"
      color="#000"
      style={{ cursor: "pointer" }}
    />
  </div>);
}
export default Search;
