import { useRef, useState } from 'react'
import './index.css'
import { Eye, EyeSlash } from 'iconsax-react';
const Password = () => {
  const password = useRef(null);
  const [isShowPassword, setShowPassword] = useState(false);
  const handlePassword = (e) => {
    e.stopPropagation();
    if (!isShowPassword) {
      password.current.type = "text";
      document.getElementsByClassName("show-password")[0].style.scale = 0;
      document.getElementsByClassName("hide-password")[0].style.scale = 1;
    } else {
      password.current.type = "password";
      document.getElementsByClassName("show-password")[0].style.scale = 1;
      document.getElementsByClassName("hide-password")[0].style.scale = 0;
    }
    setShowPassword(n => !n);
  }
  return <div className="password login-input">
    <input className="password-input" ref={password} type="password" placeholder='password' name='password' />
    <Eye size="20" name="show" color="#000" onClick={handlePassword} className="show-password" />
    <EyeSlash size="20" name="hide" onClick={handlePassword} color="#000" className="hide-password" />
  </div>
}
export default Password;
