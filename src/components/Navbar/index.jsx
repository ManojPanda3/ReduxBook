import { useContext, useEffect, useState } from 'react'
import './index.css'
import Search from '../Search';
import UserProfile from '../UserProfile';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/GlobalVar.utils';
const NavBar = () => {
  const { userDetails } = useContext(UserContext);
  return <nav className="navbar">
    <div className="logo-container">
      <p className="logo">ReduxBook</p>
    </div>
    <div className="nav-right" style={{
    }}>
      <Search />
      <ul className="tabs display-desktop-only">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><a
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#footer").offsetTop,
              behavior: "smooth",
            });
          }}

        >Contact</a></li>
      </ul>
      {userDetails ? <UserProfile UserData={userDetails} /> : <Link className="login-btn" to="/login">Login</Link>}
    </div>
  </nav>
}

export default NavBar;
