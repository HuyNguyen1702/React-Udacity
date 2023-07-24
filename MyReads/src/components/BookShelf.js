import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ bookShelfTitle, bookShelfType, books, onBookChange }) {
  const renderedBookList = books
    .filter((book) => book.shelf === bookShelfType)
    .map((book) => (
      <li key={book.id}>
        <Book book={book} onBookChange={onBookChange} shelf={book.shelf} />
      </li>
    ));
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{renderedBookList}</ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  bookShelfTitle: PropTypes.string,
  bookShelfType: PropTypes.string,
  books: PropTypes.array,
  onBookChange: PropTypes.func,
};

export default BookShelf;
