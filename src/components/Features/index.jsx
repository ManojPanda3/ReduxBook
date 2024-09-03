import './index.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  useGSAP(() => {
    gsap.fromTo(".feature-section", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: '.feature-section',
        start: '-30% center',
        end: '-25% center',
        toggleActions: 'play none none none'
      }
    });
  });

  return <section className="feature-section">
    <div className="feature-texts">
      <i className="line"></i>
      <p>The</p>
      <p>Features</p>
      <p>We Provide</p>
    </div>
    <div className="features">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22Z"
            stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M15.495 12h.01M8.495 12h.008" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p>Sell and Buy eBooks</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          </path>
        </svg>
        <p>Effortless Searching<br />
          of Books</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64" height="64"
          viewBox="0 0 24 24" fill="none">
          <path d="M3.67 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9c.79-.59 1.25-1.52 1.25-2.5V2.5H3.67Z"
            stroke="#000" strokeWidth="1.5" strokeMiterlimit="10">
          </path>
          <path d="M2 2.5h20" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round">
          </path>
          <path d="M8 8h8M8 13h8" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p>Ease of Payment<br />
          through UPI</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64" height="64"
          viewBox="0 0 24 24" fill="none">
          <path d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
            stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <p>Read Reviews<br />
          and Ratings</p>
      </div>
    </div>
  </section>
}
export default Features;
