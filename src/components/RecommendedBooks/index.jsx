import { useEffect, useState } from 'react'
import './index.css'
import Books from '../Books';
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react';
const RecommendedBooks = () => {
  const [tab, setTab] = useState(1);
  useEffect(() => {
    console.info(tab);
  }, [tab]);

  return (<section className="recommended-book-section">
    <p>Recommended Books</p>
    <div className="books">
      <ArrowCircleLeft size="32" color="#2ccce4" variant="Bold" onClick={() => setTab(n => n > 1 ? --n : 3)} />
      <Books Image={"https://m.media-amazon.com/images/I/81GifSHYiGL._SY425_.jpg"} Price={"100"} Rating={4.5} Title={"How to publish a book"} />
      <Books Image={"https://m.media-amazon.com/images/I/81GifSHYiGL._SY425_.jpg"} Price={"100"} Rating={4.5} Title={"How to publish a book"} />
      <Books Image={"https://m.media-amazon.com/images/I/81GifSHYiGL._SY425_.jpg"} Price={"100"} Rating={4.5} Title={"How to publish a book"} />
      <ArrowCircleRight size="32" color="#2ccce4" variant="Bold" onClick={() => setTab(n => n < 3 ? ++n : 1)} />
    </div>
    <div className="books-tab">
      <i className={tab == 1 ? "active-tab" : ""}></i>
      <i className={tab == 2 ? "active-tab" : ""}></i>
      <i className={tab == 3 ? "active-tab" : ""}></i>
    </div>
  </section >);
}
export default RecommendedBooks; 
