import './index.css'
import NavBar from '../../components/Navbar';
import RecommendedBooks from '../../components/RecommendedBooks';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { useEffect, useState } from 'react';
import PublishBooks from '../../components/PublishBooks';

const Profile = () => {
  const { UserName } = useParams();
  const [UserData, setUserData] = useState(null);
  useEffect(() => {
    fetch("/api/v1/user/getUserDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: UserName
      })
    }).then(data => data.json())
      .then((res) => { setUserData(res.data); console.info(res); })
      .catch((err) => console.error(err));
  }, [UserName]);
  return <section className="profile">
    <NavBar />
    <section className="profile-section">
      <div className="user-details-profile" >
        <LazyLoad>
          <img src={UserData?.avatar || ""} alt="." height="100%" width="100%" />
        </LazyLoad>
        <p name="fullname" >{UserData?.name || ""}</p>
        <p name="username" >@{UserData?.username || ""}</p>
        <p name="description">{UserData?.description || ""}</p>
      </div>
    </section>
    <RecommendedBooks />
    <PublishBooks PublishedBooks={
      [{
        coverImages: [""],
        title: "Hello world",
        avgRating: 4.0,
        price: 100
      },
      {
        coverImages: [""],
        title: "Hello world",
        avgRating: 4.0,
        price: 100
      }
      ]
      // UserData?.publishedBooks
    } />
  </section>
}
export default Profile;
