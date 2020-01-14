import React from "react";
import "./BookListItem.scss";
const BookListItem = props => {
  const { book, bookAddedToCart } = props;
  return (
    <ul className="book-list-item">
      <li>
        <h2>{book.title}</h2>

        <img src={book.imageUrl}></img>
      </li>

      <li>{book.year}</li>
      <li>{book.author}</li>
      <li>{book.isbn}</li>
      <li>${book.price}</li>
      <li>
        <input
          className="btn btn-success"
          type="button"
          value="add to cart"
          onClick={bookAddedToCart}
        />
      </li>
    </ul>
  );
};

export default BookListItem;
