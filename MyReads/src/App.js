import "./App.css";
import { useState, useEffect } from "react";
import * as BookAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const updateBook = (book, shelf) => {
    const update = async () => {
      const data = await BookAPI.update(book, shelf);
      if (shelf === "none") {
        setBooks(books.filter((b) => b.id !== book.id));
      } else {
        book.shelf = shelf;
        setBooks(books.filter((b) => b.id !== book.id).concat(book));
      }
      return data;
    };

    update();
  };

  const searchBook = (query, maxResults) => {
    if (query.length > 0) {
      const search = async () => {
        try {
          const data = await BookAPI.search(query, maxResults);
          if (data.error) {
            setSearchBooks([]);
          } else setSearchBooks(data);
        } catch (err) {
          setSearchBooks([]);
        }
      };

      search();
    } else {
      setSearchBooks([]);
    }
  };

  const clearSearch = () => {
    setSearchBooks([]);
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await BookAPI.getAll();
      setBooks(books);
    };
    getAllBooks();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<BookList books={books} onBookChange={updateBook} />}
      ></Route>
      <Route
        path="/search"
        element={
          <SearchBook
            onSearchBook={searchBook}
            searchBooks={searchBooks}
            onBookChange={updateBook}
            onClearSearch={clearSearch}
            books={books}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
