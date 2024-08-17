import { } from 'react'
import './index.css'
import NavBar from '../../components/Navbar';
import HeroSection from '../../components/HeroPage';
import Features from '../../components/Features';
import RecommendedBooks from '../../components/RecommendedBooks';
import Footer from '../../components/Footer';
const Home = () => {
  return (<>
    <NavBar />
    <HeroSection />
    <Features />
    <RecommendedBooks />
    <Footer />
  </>)
}
export default Home;
