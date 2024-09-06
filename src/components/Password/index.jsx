import { useRef, useState } from 'react'
import './index.css'
const Password = () => {
  const password = useRef(null);
  const [isShowPassword, setShowPassword] = useState(false);
  const handlePassword = (e) => {
    e.stopPropagation();
    if (!isShowPassword) {
      password.current.type = "text";
    } else {
      password.current.type = "password";
    }
    setShowPassword(n => !n);
  }
  return <div className="password login-input">
    <input className="password-input" ref={password} type="password" placeholder='password' name='password' />
    {isShowPassword ? <svg
      name="show"
      xmlns="http://www.w3.org/2000/svg"
      width="20" height="20"
      viewBox="0 0 24 24"
      fill="none"
      onClick={handlePassword}
    >
      <path d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
        stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg> :
      <svg
        onClick={handlePassword}
        name="hide" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ scale: "1" }} >
        <path d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
          stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47" stroke="#000"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>}
  </div>
}
export default Password;
