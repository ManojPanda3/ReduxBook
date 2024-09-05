import { useEffect, useState } from 'react'
import './index.css'
import Alert from '../Alert';
import { Link } from 'react-router-dom';

// a otpTimer template which set a timer for 9min 59 sec
const OtpTimer = ({ setAuthToken }) => {
  const [time, setTime] = useState(599);
  if (time == 1) setAuthToken(null);
  const handleResendOtp = () => {
    setAuthToken(async (AuthToken) => {
      try {
        const email = document.getElementById("email").value;
        const data = await fetch("/api/v1/email/resendotp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ AuthToken, email })
        })
        const res = await data.json()
        if (res.status == 200) {
          setTime(599);
          return res.data.AuthToken;
        }
      }
      catch (err) {
        console.error("Error while resending otp, Error: ", err);
      }
      return AuthToken;
    })
  }
  useEffect(() => {
    // dec the time every 1sec 
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time])
  return <div style={{ width: "90%", display: "flex", justifyContent: "space-between" }}>
    {Math.floor(time / 60)}:{time % 60}
    <Link style={{ fontSize: "0.95rem" }} onClick={handleResendOtp} href="/singup">resend otp</Link>
  </div>
}
const Otp = ({ AuthToken, setAuthToken, setOtpVerify }) => {
  // a state func stores the input of 6 input tags (otp)
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // on user Input/otp input
  const handleInput = (e) => {
    // check which number of otp input is given
    const index = e.target.getAttribute("name");
    if (index > 1 && !e.target.value) {
      e.target.parentElement.children[index - 1].focus();
      return;
    }
    const reg = /[A-Za-z~!@#$%^&*()_+=-}{['";:/?.><,|-]/;
    // check if the input consist alphabets then skip it
    if (reg.test(e.target.value)) return;
    setOtp(n => {
      let data = [...n];
      data[index - 1 + 1] = e.target.value;
      return data;
    })
    if (index < 5 && e.target.value) {
      e.target.parentElement.children[index - 1 + 2].focus();
    }
  }

  const verifyOtp = (e) => {
    e.preventDefault();
    let Otp = "";
    for (let i of otp) {
      if (!i) {
        Alert("Invelid Otp")
        return;
      }
      Otp += i;
    }

    // verify the otp
    fetch("/api/v1/email/verifyotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AuthToken: AuthToken,
        otp: Otp
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 401) {
          Alert("Undefine behaviour")
        } else if (data.status == 404) {
          Alert("otp was expired");
        }
        else if (data.status == 200) {
          setOtpVerify(true);
        }
      })
      .catch((err) => {
        console.error("Error while verifying otp \n Error: ", err);
      });
  }
  return <div className="otp-container" >
    <form className="otp-box" onSubmit={verifyOtp} >
      <h1>Verify Email</h1>
      <div className="otps">
        <input type="text" maxLength={1} value={otp[0]} name={0} onChange={handleInput} />
        <input type="text" maxLength={1} value={otp[1]} name={1} onChange={handleInput} />
        <input type="text" maxLength={1} value={otp[2]} name={2} onChange={handleInput} />
        <input type="text" maxLength={1} value={otp[3]} name={3} onChange={handleInput} />
        <input type="text" maxLength={1} value={otp[4]} name={4} onChange={handleInput} />
        <input type="text" maxLength={1} value={otp[5]} name={5} onChange={handleInput} />
      </div>
      <input type="submit" className="singup-submit" value="verify" style={{ margin: "1rem 0rem" }} />
      <OtpTimer setAuthToken={setAuthToken} />
    </form>
  </div>
}
export default Otp;
