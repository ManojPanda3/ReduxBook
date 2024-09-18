import { } from 'react'
import './index.css'
import Search from '../Search';
const Footer = ({ style }) => {
  return <footer style={style} id="footer">
    <p className="logo">ReduxBook</p>
    <div className="footer-details">
      <div className="search-book">
        <p>Search for Books</p>
        <Search />
      </div>
      <div >
        <div className="footer-contact">
          <p>Contact</p>
          <p>ReduxBook@gmail.com</p>
        </div>
        <div className="footer-page">
          <p>Page</p>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
    </div>
  </footer>
}
export default Footer;
