import { } from 'react'
import './index.css'
import Search from '../Search';
import UserProfile from '../UserProfile';
const NavBar = () => {
  return <nav className="navbar">
    <div className="logo-container">
      <p className="logo">ReduxBook</p>
    </div>
    <div className="nav-right" style={{
    }}>
      <Search />
      <ul className="tabs display-desktop-only">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>
      <UserProfile />
    </div>
  </nav>
}
export default NavBar;
