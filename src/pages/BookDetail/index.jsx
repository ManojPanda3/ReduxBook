import './index.css'
import NavBar from '../../components/Navbar';
import RecommendedBooks from '../../components/RecommendedBooks';
import BookProfile from '../../components/BookProfile';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { BookId } = useParams();
  return <section className="profile">
    <NavBar />
    <BookProfile Mode={1} AuthorName={"Manoj panda"} AuthorSrc={"https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w240-h240-rw"} Title={"Book"} Rating={"4.5"} ImageSrc={"https://m.media-amazon.com/images/I/81GifSHYiGL._SY425_.jpg"} Price={"100"} Description={"Hello"} />
    <RecommendedBooks />
  </section>
}
export default BookDetail;
