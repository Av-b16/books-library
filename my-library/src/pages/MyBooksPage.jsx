import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyBookCard from "../components/MyBookCard";
import { updateBookStatus, updateBookRating } from "../redux/actions/booksActions";
import { auth } from "../firebase/firebaseConfig"; // Firebase Authentication
import { fetchBooksFromFirebase } from "../redux/actions/booksActions"; // Action to fetch books
import "../styles/MyBooks.css";

const MyBooks = () => {
  const dispatch = useDispatch();
  const myBooks = useSelector((state) => state.books.myBooks);
  const [userId, setUserId] = useState(null);

  // Get the current user ID from Firebase Authentication
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserId(currentUser.uid); // Store the userId
      dispatch(fetchBooksFromFirebase(currentUser.uid)); // Fetch books on component mount
    }
  }, [dispatch]);

  // Function to handle the status update
  const handleStatusChange = (bookId, status) => {
    if (!userId) {
      console.error("User is not authenticated.");
      return;
    }
    dispatch(updateBookStatus(userId, bookId, status)); // Pass the bookId to update only the selected book
  };

  // Function to handle the rating update
  const handleRatingChange = (bookId, rating) => {
    if (!userId) {
      console.error("User is not authenticated.");
      return;
    }
    dispatch(updateBookRating(userId, bookId, rating)); // Pass the bookId to update only the selected book
  };

  return (
    <div className="my-books">
      <h1>My Books</h1>
      {myBooks.length > 0 ? (
        myBooks.map((book) => (
          <MyBookCard
            key={book.id} // Ensure the key is unique for each book
            book={book}
            handleStatusChange={handleStatusChange}
            handleRatingChange={handleRatingChange}
          />
        ))
      ) : (
        <p>No books added yet.</p>
      )}
    </div>
  );
};

export default MyBooks;
