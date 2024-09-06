import React, { useRef, useState } from 'react'
import "./index.css"
import Alert from '../Alert';

export const ImageUploader = () => {
  const [avatar, setAvatar] = useState(null);  // to store the avatar image uploaded by the user 
  const fileInput = useRef(null);

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
  return (
    <div className="img-uploader">
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
  )
}

