import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

function SearchBook({
  books,
  searchBooks,
  onSearchBook,
  onBookChange,
  onClearSearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    onSearchBook(event.target.value, 20);
  };

  const handleClearSearch = () => {
    onClearSearch();
  };

  const renderedSearchBook = searchBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={handleClearSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {renderedSearchBook.map((book) => (
            <Book
              book={book}
              key={book.id}
              onBookChange={onBookChange}
              shelf={book.shelf ? book.shelf : "none"}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

SearchBook.propTypes = {
  books: PropTypes.array,
  searchBooks: PropTypes.func,
  onSearchBook: PropTypes.func,
  onBookChange: PropTypes.func,
  onClearSearch: PropTypes.func,
};

export default SearchBook;
