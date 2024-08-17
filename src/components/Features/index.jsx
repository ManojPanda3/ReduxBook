import './index.css'
import { Bag2, Bill, SearchNormal1, Star1 } from 'iconsax-react';
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
        start: 'top 80%', // Adjust this value as needed
        end: 'bottom 20%',
        toggleActions: 'play none none none' // Play animation when entering the viewport
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
        <Bag2 size="64" color="#000" />
        <p>Sell and Buy eBooks</p>
      </div>
      <div>
        <SearchNormal1 size="64" color="#000" />
        <p>Effortless Searching<br />
          of Books</p>
      </div>
      <div>
        <Bill size="64" color="#000" />
        <p>Ease of Payment<br />
          through UPI</p>
      </div>
      <div>
        <Star1 size="64" color="#000" />
        <p>Read Reviews<br />
          and Ratings</p>
      </div>
    </div>
  </section>
}
export default Features;
