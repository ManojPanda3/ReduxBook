import { PropTypes } from "prop-types"
import './index.css'
import UserMenu from "../UserMenu";
import { useRef, useState } from "react";

const UserProfile = ({ UserData }) => {
  const userProfileAvatar = UserData?.avatar || "";

  return (
    <div style={{ position: "relative" }}>
      <div className="user-profile" style={{ cursor: "pointer" }} onClick={() => {
        document.querySelector("#user-menu").classList.toggle("menu-opened");
        document.querySelector("#user-menu").classList.toggle("menu-closed");
      }}>
        <img src={userProfileAvatar} />
      </div>
      <UserMenu UserName={UserData.username} />
    </div >
  );
}
UserProfile.propTypes = {
  UserData: PropTypes.object
};
export default UserProfile;
