import { useEffect, useRef, useState } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
import Alert from '../../components/Alert'
import Password from '../../components/Password'
import { verifyEmail, verifyPassword } from "../../utils/email.utils.js"
import Otp from '../../components/Otp/index.jsx';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/index.jsx';

const Singup = () => {
  const [avatar, setAvatar] = useState(null);  // to store the avatar image uploaded by the user 
  const [AuthToken, setAuthToken] = useState(null); // authToken -> use to represent a session to create user 
  const [OtpVerify, setOtpVerify] = useState(false); // is otp verified so we can proced with create the account
  const [LoadingState, setLoadingState] = useState("");  // for loading screen while sending req to backend 
  const fileInput = useRef(null);
  const userData = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!OtpVerify) return;
    setLoadingState("loading");
    setAuthToken(null);
    fetch("/api/v1/user/createUser", {
      method: "POST",
      body: userData.current
    })
      .then(res => res.json())
      .then(data => {
        setLoadingState("fail");
        if (data.status == 402) Alert(data.message);
        if (data.status == 200 && data.message == "User created successfully") {
          setLoadingState("success")
          setTimeout(n => navigate('/'), 1000);
        }
      }
      .catch(err => {
        console.error("Error while creating user account ,\n Error :", err);
      })
    setOtpVerify(false);
  }, [OtpVerify]);

  // a function which will called when user try to submit the data;
  const handelSingup = async (event) => {
    event.preventDefault();
    let data = {};
    for (let i of event.target) {
      if (!i.name) continue;
      if (!i.value) {
        Alert(i.name + " is also required");
        return;
      }
      data[i.name] = i.value;
    }
    userData.current = new FormData(event.target);
    try {
      if (!verifyEmail(data["email"])) return;
      if (!verifyPassword(data["password"])) return;
      let isUserExist = await fetch("/api/v1/user/isUserExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data?.email,
          username: data?.username
        })
      });
      isUserExist = await isUserExist.json();
      if (isUserExist.status != 200) {
        Alert(isUserExist.message);
        return;
      }
      if (isUserExist.data.isUserExist) {
        Alert("user already exist")
        return;
      }
    } catch (err) {
      console.error("This Error:\n", err, "\nhappend while verifying if user exist or not");
    }
    setLoadingState("loading")
    try {
      let otp = await fetch("/api/v1/email/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data?.email,
          username: data?.username
        })
      })
      const otpRes = await otp.json();
      if (!otpRes?.success) {
        setV
        Alert(otpRes?.message);
        setLoadingState("");
        return;
      }
      userData.current.delete("AuthToken");
      userData.current.append("AuthToken", otpRes.data.AuthToken);
      setAuthToken(otpRes.data.AuthToken);
    } catch (err) {
      console.error("SomeError occure while using otp", err)
    }
  }
  const handleFiles = (e) => {
    e.stopPropagation();
    const file = e.target.files[0];
    const allowedExtensions = ["jpg", "jpeg", "png", "svg"];
    if (!allowedExtensions.includes(file.name.toLowerCase().split(".").pop())) {
      Alert("only jpg , jpeg , png , svg format files are allowed");
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        const img = reader.result;
        setAvatar(img);
      }
      reader.readAsDataURL(file);
    }
  }

  return <>
    <Loading state={LoadingState} childrenVisible={AuthToken}>
      <Otp setOtpVerify={setOtpVerify} AuthToken={AuthToken} setAuthToken={setAuthToken} />
    </Loading >
    <NavBar />
    <section className="singup-section">
      <h1>SingUp</h1>
      <form className="user-details" onSubmit={handelSingup} >
        <div>
          <input type="file" ref={fileInput} name="avatar" id="fileInput" accept="image/*" onChange={handleFiles} className="avatar-uploader" />
          {
            avatar ?
              <>
                <img src={avatar} alt="your avatar" height="100%" width="100%" />
                <svg
                  onClick={() => setAvatar(null)}
                  className="avatar-close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" viewBox="0 0 24 24"
                  fill="none">
                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z"
                    fill="#f47373">
                  </path>
                </svg>
              </>
              :
              <svg
                className="file-add"
                xmlns="http://www.w3.org/2000/svg"
                width="1em" height="1em"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                <path
                  d="M6 12h12M12 18V6"
                  stroke="#313131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path>
              </svg>
          }
        </div>
        <label htmlFor="fullname">FullName</label>
        <input type="text" name="fullname" placeholder='fullname' />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder='username' />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder='email' />
        <label htmlFor="password">password</label>
        <Password />
        <label htmlFor="description">User description</label>
        <textarea name="description" placeholder='description' rows="5" cols="30"></textarea>
        <input type="submit" className="singup-submit" value="Submit" />
      </form>
    </section></>
}
export default Singup;
