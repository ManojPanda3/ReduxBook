import './index.css'
import NavBar from '../../components/Navbar';
import RecommendedBooks from '../../components/RecommendedBooks';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Profile = () => {
  const { UserName } = useParams();
  console.info(UserName)
  return <section className="profile">
    <NavBar />
    <section className="profile-section">
      <div className="user-details-profile" >

        <LazyLoad>
          <img src={"https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w240-h240-rw"} alt="." height="100%" width="100%" />
        </LazyLoad>
        <p name="fullname" >Name</p>
        <p name="username" >@Username</p>
        <p name="description"> Hello guys hows u i m manoj panda  i m a 19yr old man :) </p>
      </div>
    </section>
    <RecommendedBooks />
  </section>
}
export default Profile;
