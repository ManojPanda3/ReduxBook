import { useEffect, useState } from 'react'
import './index.css'
import Search from '../Search';
import UserProfile from '../UserProfile';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isUserLogin, setUserLogin] = useState(false);
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      return;
    }
    fetch("/api/v1/user/isuserexist", {
      method: 'POST',
      body: JSON.stringify({
        accessToken
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => {

      console.log("hi -> ", res);
    })
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
      {isUserLogin ? <UserProfile /> : <Link className="display-desktop-only login-btn " to="/login">Login</Link>}
    </div>
  </nav>
}

export default NavBar;
