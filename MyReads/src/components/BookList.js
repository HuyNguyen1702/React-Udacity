import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

function BookList({ books, onBookChange }) {
  const bookShelfs = [
    {
      bookShelfTitle: "Currently Reading",
      bookShelfType: "currentlyReading",
    },
    {
      bookShelfTitle: "Want To Read",
      bookShelfType: "wantToRead",
    },
    {
      bookShelfTitle: "Read",
      bookShelfType: "read",
    },
  ];

  const renderedBookShelfs = bookShelfs.map((bookShelf) => (
    <BookShelf
      key={bookShelf.bookShelfTitle}
      bookShelfTitle={bookShelf.bookShelfTitle}
      bookShelfType={bookShelf.bookShelfType}
      books={books}
      onBookChange={onBookChange}
    />
  ));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>{renderedBookShelfs}</div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array,
  onBookChange: PropTypes.func,
};

export default BookList;
