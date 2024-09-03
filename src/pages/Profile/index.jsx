import './index.css'
import NavBar from '../../components/Navbar';
import RecommendedBooks from '../../components/RecommendedBooks';

const Profile = () => {
  return <section className="profile">
    <NavBar />
    <section className="profile-section">
      <div className="user-details-profile" >
        <div>
          <img src={"https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w240-h240-rw"} alt="your avatar" height="100%" width="100%" />
        </div>
        <p name="fullname" >Name</p>
        <p name="username" >@Username</p>
        <p name="description"> Hello guys hows u i m manoj panda  i m a 19yr old man :) </p>
      </div>
    </section>
    <RecommendedBooks />
  </section>
}
export default Profile;
