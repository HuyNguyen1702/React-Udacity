import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function BookChanger({ book, shelf, onBookChange }) {
  const [bookDetail, setBookDetail] = useState(shelf);

  const handleSelect = (event) => {
    setBookDetail(event.target.value);
    onBookChange(book, event.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={bookDetail} onChange={handleSelect}>
        <option value="abc" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookChanger.propTypes = {
  book: PropTypes.array,
  shelf: PropTypes.string,
  onBookChange: PropTypes.func,
};

export default BookChanger;
