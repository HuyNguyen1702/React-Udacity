import React from "react";
import BookChanger from "./BookChanger";
import PropTypes from "prop-types";

function Book({ book, shelf, onBookChange }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "icons/book-placeholder.svg"
            })`,
          }}
        ></div>
        <BookChanger book={book} shelf={shelf} onBookChange={onBookChange} />
      </div>
      <div className="book-title">{book.title ? book.title : ""}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join("-") : "Unknow artist"}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.array,
  shelf: PropTypes.string,
  onBookChange: PropTypes.func,
};

export default Book;
