import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import Password from '../../components/Password';
import Alert from '../../components/Alert';
import { verifyEmail, verifyPassword } from "../../utils/email.utils.js"


const loginUser = async (userDetails, loginMethod) => {
  const sendingBody = {
    email: loginMethod ? userDetails[0] : "",
    username: loginMethod ? "" : userDetails[0],
    password: userDetails[1],
  }

  const user = await fetch("/api/v1/user/userLogin", {
    method: 'POST',
    body: JSON.stringify(sendingBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const jsonRes = await user.json();
  if (!jsonRes.success) {
    Alert(jsonRes.message);
    return;
  }
  console.info("user succesfully logined")
  return;
}
const Login = () => {
  const [usingEmail, setLoginMode] = useState(false);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (usingEmail && !verifyEmail(e.target[0].value)) return;
    const password = e.target[1].value;
    if (!verifyPassword(password)) return;
    loginUser([e.target[0].value, password], usingEmail);
    return;
  }
  return <section >
    <NavBar />
    <div className="login-section">
      <span className="login-head">
        <h1>Login</h1>
      </span>
      <form className="login-form" onSubmit={handleEmailSubmit}>
        {usingEmail ?
          <>
            <label htmlFor="email">email</label>
            <input type="email" className="login-input" placeholder='Email' name='email' />
          </>
          :

          <>
            <label htmlFor="username">username</label>
            <input type="text" className="login-input" placeholder='username' name='username' />
          </>
        }

        <label htmlFor="password">password</label>
        <Password />
        <button className="login-submit">Submit</button>
        <div>

          <Link to="/singup">create a account</Link>
          <Link onClick={() => setLoginMode(n => !n)}>{
            usingEmail ? <>use username</> : <>use email</>
          }</Link>
        </div>
      </form>
    </div>
  </section>
}
export default Login;
