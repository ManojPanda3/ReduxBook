import { } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
const Singup = () => {
  return <>
    <NavBar />
    <section className="singup-section">
      <h1>Create User</h1>
      <div><img src="" alt="" /></div>
      <div className="user-details">
        <label htmlFor="fullname">FullName</label>
        <input type="text" name="fullName" placeholder='fullname' />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder='username' />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder='email' />
        <label htmlFor="user-description">User description</label>
        <textarea name="user-description" placeholder='description' rows="5" cols="30"></textarea>
      </div>
    </section></>
}
export default Singup;
