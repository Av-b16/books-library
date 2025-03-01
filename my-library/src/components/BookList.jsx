import React from "react";
import BookCard from "./BookCard";
import "../styles/BookList.css";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book, index) => <BookCard key={index} book={book} />)
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
