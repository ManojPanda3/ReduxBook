import { } from 'react'
import './index.css'
import Search from '../Search';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Footer = ({ style }) => {
  useGSAP(() => {
    gsap.fromTo("footer", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%', // Adjust this value as needed
        end: 'bottom 20%',
        toggleActions: 'play none none none' // Play animation when entering the viewport
      }
    });
  });
  return <footer style={style} id="footer">
    <p className="logo">ReduxBook</p>
    <div className="footer-details">
      <div className="search-book">
        <p>Search for Books</p>
        <Search />
      </div>
      <div >
        <div className="footer-contact">
          <p>Contact</p>
          <p>ReduxBook@gmail.com</p>
        </div>
        <div className="footer-page">
          <p>Page</p>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
    </div>
  </footer>
}
export default Footer;
