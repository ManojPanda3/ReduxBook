import { } from 'react'
import './index.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const RecommendedBooks = () => {
  useGSAP(() => {
    // gsap.fromTo(".recommended-book-section", {
    //   opacity: 0,
    // }, {
    //   opacity: 1,
    //   ease: "power1.inOut",
    //   delay: 0.2,
    //   scrollTrigger: {
    //     trigger: '.recommended-book-section',
    //     start: 'top center',
    //     // Adjust this value as needed
    //     end: 'top center',
    //     toggleActions: 'play none none none'
    //   }
    // });
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
