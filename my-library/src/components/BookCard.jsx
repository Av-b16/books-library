import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBooks } from "../redux/actions/booksActions";
import "../styles/BookCard.css";

const BookCard = ({ bookId, book }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddBook = () => {
    if (user) {
      dispatch(addToMyBooks(user.uid, bookId, { ...book, status: "Reading", rating: 0 }));
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {user && <button onClick={handleAddBook}>Add to My Books</button>}
    </div>
  );
};

export default BookCard;
