import { useRef, useState } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
import { Add, CloseCircle } from 'iconsax-react';
import Alert from '../../components/Alert'
import Password from '../../components/Password'
import { verifyEmail, verifyPassword } from "../../utils/email.utils.js"
const Singup = () => {
  const fileInput = useRef(null);
  const [avatar, setAvatar] = useState(null);
  // a function which will called when user try to submit the data;
  const handelSingup = async (event) => {
    event.preventDefault();
    let data = {};
    for (let i of event.target) {
      if (!i.name) continue;
      data[i.name] = i.value;
    }
    try {
      if (!verifyEmail(data["email"])) return;
      let isUserExist = await fetch("/api/v1/user/isUserExist", {
        method: "POST",
        body: JSON.stringify({
          email: data["email"],
          username: data["username"]
        })
      });
      isUserExist = await isUserExist.json();
      console.info(isUserExist)
      if (isUserExist.success) {
        if (isUserExist.status != 200) Alert(isUserExist.message);
        else if (isUserExist.data.isUserExist) Alert("User with same email and password already exist")
        return;
      }
    } catch (err) {
      console.error("This Error:\n", err, "\nhappend while verifying if user exist or not");
    }
    try {
      let otp = await fetch("/api/v1/user/isUserExist", {
        method: "POST",
        body: JSON.stringify({
          email: data["email"],
          username: data["username"]
        })
      })
      console.info(otp)
    } catch (err) {
      console.error("SomeError occure while using otp", err)
    }
  }
  const handleFiles = (e) => {
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
    console.log(e.target.files)
  }

  return <>
    <NavBar />
    <section className="singup-section">
      <h1>SingUp</h1>
      <form className="user-details" onSubmit={handelSingup} >

        <div>{
          avatar ?
            <>
              <img src={avatar} alt="your avatar" height="100%" width="100%" />
              <CloseCircle className="avatar-close" size="32" color="#f47373"
                variant="Bold"
                onClick={() => setAvatar(null)}
              />
            </>
            : <>
              <input type="file" ref={fileInput} id="fileInput" accept="image/*" onChange={handleFiles} className="avatar-uploader" />
              <Add
                className="file-add"
                size="1em"
                color="#313131"
                onClick={() => {
                  fileInput.current.click();
                }}

              />
            </>
        }
        </div>
        <label htmlFor="fullname">FullName</label>
        <input type="text" name="fullName" placeholder='fullname' />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder='username' />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder='email' />
        <label htmlFor="password">password</label>
        <Password />
        <label htmlFor="description">User description</label>
        <textarea name="description" placeholder='description' rows="5" cols="30"></textarea>
        <input type="submit" className="singup-submit" value="Submit" />
      </form>
    </section></>
}
export default Singup;
