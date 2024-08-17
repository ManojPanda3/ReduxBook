import { useEffect, useState } from 'react'
import './index.css'
import Search from '../Search';
import UserProfile from '../UserProfile';
import Cookies from 'js-cookie';
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
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>
      {isUserLogin ? <UserProfile /> : <a className="display-desktop-only login-btn ">Login</a>}
    </div>
  </nav>
}

export default NavBar;
