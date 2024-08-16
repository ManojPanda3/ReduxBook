import { } from 'react'
import './index.css'
const BookProfile = ({ Description, Price, ImageSrc }) => {
  return <div className="book-profile-container">
    <div className="book"><img src={ImageSrc} alt="book-cover" className="book-cover" /></div>
    <p>{Description}</p>
    <p>{Price}</p>
  </div>
}
export default BookProfile;
