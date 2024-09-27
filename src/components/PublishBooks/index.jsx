import './index.css'
import { AddCircle } from 'iconsax-react';
import Books from "../Books"
const PublishBooks = ({ PublishedBooks }) => {
  // TODO: 
  // make a title bar with a  btn to publish the book (if they looking at there own profile)
  // add 10 top published book and see if there more then 10 book if yes then give a see more option to see more similar type of books 
  // if user click the publish btn redirect them to another route :) named as /buyBook

  return (<section className="publish-book-section">
    <div>
      <p>Published Books</p>
      <AddCircle size="32" color="#37d67a" variant="Bold" />
    </div>
    <div className="published-books">
      {
        PublishedBooks?.slice(0, 3).map((book, index) => {
          return <div key={index + book.title} >
            <Books Image={book.coverImages[0]} alt={book.title} Rating={book.avgRating} Price={book.price} ></Books>
          </div>
        })
      }
    </div>
  </section >);
}
export default PublishBooks;
