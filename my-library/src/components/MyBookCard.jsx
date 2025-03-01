import React, { useState } from "react";
import "../styles/MyBookCard.css";

const MyBookCard = ({ book, handleStatusChange, handleRatingChange }) => {
  const [newStatus, setNewStatus] = useState(book.status);
  const [newRating, setNewRating] = useState(book.rating);

  const handleStatusSelect = (e) => {
    const newStatusValue = e.target.value;
    setNewStatus(newStatusValue);
    handleStatusChange(book.id, newStatusValue); // Pass the book's ID and new status
  };

  const handleRatingSelect = (e) => {
    const newRatingValue = e.target.value;
    setNewRating(newRatingValue);
    handleRatingChange(book.id, newRatingValue); // Pass the book's ID and new rating
  };

  return (
    <div className="my-book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Status: 
        <select value={newStatus} onChange={handleStatusSelect}>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>
      </p>
      <p>
        Rating: 
        <select value={newRating} onChange={handleRatingSelect}>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </p>
    </div>
  );
};

export default MyBookCard;
