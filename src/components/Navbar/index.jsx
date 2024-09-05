import { useEffect, useState } from 'react'
import './index.css'
import Search from '../Search';
import UserProfile from '../UserProfile';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [UserData, setUserData] = useState(null);
  useEffect(() => {
    console.log("hello")
    fetch("/api/v1/user/getCurrentUser", { method: 'POST' })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("Error occure during fetching current userData\n Error: ", err));
    return () => { };
  }, []);
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
      {UserData ? <UserProfile UserData={UserData} /> : <Link className="display-desktop-only login-btn " to="/login">Login</Link>}
    </div>
  </nav>
}

export default NavBar;
