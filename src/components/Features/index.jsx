import { } from 'react'
import './index.css'
import { Bag2, Bill, SearchNormal1, Star1 } from 'iconsax-react';
const Features = () => {
  return <section className="feature-section">
    <div className="feature-texts">
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
