import { useContext } from "react";
import "./index.css"
import { UserContext } from "../../utils/GlobalVar.utils";
import { useNavigate } from "react-router-dom";
const UserMenu = ({ UserName }) => {
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await fetch("/api/v1/user/logout", { method: "POST" });
    const logoutRes = await res.json();
    if (logoutRes.status == 200) setUserDetails(null);
  }
  return (
    <ul className="user-menu menu-closed" id={"user-menu"} >
      <li onClick={() => navigate("/profile/" + UserName)} >Profile</li>
      <li onClick={handleLogout}>Logout</li>
    </ul>

  )
}

export default UserMenu;
