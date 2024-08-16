import { } from 'react'
import './index.css'

const userProfileAvatar = "";
const UserProfile = () => {
  return (<div className="user-profile" style={{ cursor: "pointer" }}>
    <img className="user-profile-avatar" src={userProfileAvatar} />
  </div>);
}
export default UserProfile;
