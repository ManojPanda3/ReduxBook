import { useEffect, useRef, useState } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
import Alert from '../../components/Alert'
import Password from '../../components/Password'
import { verifyEmail, verifyPassword } from "../../utils/email.utils.js"
import Otp from '../../components/Otp/index.jsx';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/index.jsx';
import { ImageUploader } from '../../components/FileUploader/index.jsx';


const SingupForm = ({ setAuthToken, setLoadingState, userData }) => {
  const Payload = (body, method = "POST", headers = {
    "Content-Type": "application/json",
  }) => ({
    method,
    headers,
    body,
  });
  async function checkUserExistance(data) {
    // verify if the email is correct form or not 
    if (!verifyEmail(data["email"])) {
      setLoadingState("")
      return 0;
    }
    // verify if the password is correct form or not 
    if (!verifyPassword(data["password"])) {
      setLoadingState("")
      return 0;
    }

    // check if the user with same email and password exist or not 
    let isUserExist = await fetch("/api/v1/user/isUserExist",
      Payload(JSON.stringify({
        email: data?.email,
        username: data?.username
      })));
    isUserExist = await isUserExist.json();

    // if any error occre while verifying user 
    if (isUserExist.status != 200) {
      Alert(isUserExist.message);
      setLoadingState("")
      return 0;
    }

    // if user already exist 
    if (isUserExist.data.isUserExist) {
      Alert("user already exist")
      setLoadingState("")
      return 0;
    }
    return 1;
  }

  async function sendOtp(data) {
    try {
      // sending otp to users email account 
      let otp = await fetch("/api/v1/email/sendotp",
        Payload(JSON.stringify({
          email: data?.email,
          username: data?.username
        }))
      );
      const otpRes = await otp.json();
      // if otp sended successfully then 
      if (!otpRes?.success) {
        Alert(otpRes?.message);
        setLoadingState("");
        return;
      }
      // appending the AuthToken/A identifier of current authentication process to user data 
      userData.current.delete("AuthToken");
      userData.current.append("AuthToken", otpRes.data.AuthToken);
      setAuthToken(otpRes.data.AuthToken);

    } catch (err) {
      console.error("SomeError occure while using otp", err)
      setLoadingState(""); // u also can set it to close :) 
    }
  }
  // a function which will called when user try to submit the data;
  const handelSingup = (event) => {
    event.preventDefault();

    // start the loading animation 
    setLoadingState("loading")

    let data = {};
    for (let i of event.target) {
      if (!i.name) continue;
      if (!i.value) {
        // if any field is not present 
        Alert(i.name + " is also required");
        setLoadingState("")
        return;
      }
      data[i.name] = i.value;
    }
    userData.current = new FormData(event.target);
    checkUserExistance(data)
      .then((res) => res ? sendOtp(data) : "")
      .catch((err) => console.error("This Error:\n", err, "\nhappend while verifying if user exist or not"));
  }

  return <form className="user-details" onSubmit={handelSingup} >
    <ImageUploader />
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
}

const Singup = () => {
  const [AuthToken, setAuthToken] = useState(null); // authToken -> use to represent a session to create user 
  const [OtpVerify, setOtpVerify] = useState(false); // is otp verified so we can proced with create the account
  const [LoadingState, setLoadingState] = useState("");  // for loading screen while sending req to backend 
  const userData = useRef(null);
  const navigate = useNavigate();

  // check if the otp is verified or authToken changed then change the loading screen
  useEffect(() => {
    // if the otp is closing then close the loading too
    if (!AuthToken) setLoadingState("");

    // if otp is not verified then dont just pass
    if (!OtpVerify) return;

    // start the loading screen before creating the user 
    setLoadingState("loading");

    // creating user 
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
      })
      .catch(err => {
        setLoadingState("fail");
        console.error("Error while creating user account ,\n Error :", err);
        setTimeout(n => navigate("/singup"), 1000);
      });
  }, [OtpVerify, AuthToken]);



  return <>
    <Loading state={LoadingState} childrenVisible={AuthToken}>
      <Otp setOtpVerify={setOtpVerify} AuthToken={AuthToken} setAuthToken={setAuthToken} />
    </Loading >
    <NavBar />
    <section className="singup-section">
      <h1>SingUp</h1>
      <SingupForm setAuthToken={setAuthToken} setLoadingState={setLoadingState} userData={userData} />
    </section>
  </>
}
export default Singup;
