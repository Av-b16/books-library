import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookCard from "../components/BookCard";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Explore Books</h1>
      <div className="books-grid">
        {books && Object.entries(books).map(([id, book]) => (
          <BookCard key={id} bookId={id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
