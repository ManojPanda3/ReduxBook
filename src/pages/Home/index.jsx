import { } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
import HeroSection from '../../components/HeroPage';
import Features from '../../components/Features';
import RecommendedBooks from '../../components/RecommendedBooks';
const Home = () => {
  return (<>
    <NavBar />
    <HeroSection />
    <Features />
    <RecommendedBooks />
  </>)
}
export default Home;
