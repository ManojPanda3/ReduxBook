import { } from 'react'
import './index.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const RecommendedBooks = () => {
  useGSAP(() => {
    gsap.fromTo(".recommended-book-section", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: '.recommended-book-section',
        start: 'top 80%', // Adjust this value as needed
        end: 'bottom 20%',
        toggleActions: 'play none none none' // Play animation when entering the viewport
      }
    });
  });
  return (<section className="recommended-book-section">
    <p>Recommended Books</p>
    <div className="books"></div>
    <div className="books-tab">
      <i className="active-tab"></i>
      <i></i>
      <i></i>
    </div>
  </section >);
}
export default RecommendedBooks;
