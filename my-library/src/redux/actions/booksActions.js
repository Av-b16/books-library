import { db } from "../../firebase/firebaseConfig";
import { ref, get, set, update } from "firebase/database";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const ADD_TO_MY_BOOKS = "ADD_TO_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING";

// Fetch all books from Firebase
export const fetchBooks = () => async (dispatch) => {
  const booksRef = ref(db, "books");
  try {
    const snapshot = await get(booksRef);
    if (snapshot.exists()) {
      dispatch({ type: FETCH_BOOKS_SUCCESS, payload: snapshot.val() });
    }
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
};

// Add a book to the user's collection
export const addToMyBooks = (userId, bookId, bookData) => async (dispatch) => {
  const userBookRef = ref(db, `users/${userId}/myBooks/${bookId}`);
  await set(userBookRef, bookData);
  dispatch({
    type: ADD_TO_MY_BOOKS,
    payload: { bookId, bookData }, // Ensure payload contains all book data
  });
};

// Update the status of a book in the user's collection
export const updateBookStatus = (userId, bookId, status) => async (dispatch) => {
  const userBookRef = ref(db, `users/${userId}/myBooks/${bookId}`);
  await update(userBookRef, { status });
  
  dispatch({
    type: UPDATE_BOOK_STATUS,
    payload: { bookId, status },
  });
};

// Update the rating of a book in the user's collection
export const updateBookRating = (userId, bookId, rating) => async (dispatch) => {
  const userBookRef = ref(db, `users/${userId}/myBooks/${bookId}`);
  await update(userBookRef, { rating });

  dispatch({
    type: UPDATE_BOOK_RATING,
    payload: { bookId, rating },
  });
};

// Fetch the user's books from Firebase and store them in Redux
export const fetchBooksFromFirebase = (userId) => async (dispatch) => {
  const userBooksRef = ref(db, `users/${userId}/myBooks`);
  try {
    const snapshot = await get(userBooksRef);
    if (snapshot.exists()) {
      const books = snapshot.val();
      dispatch({ type: FETCH_MY_BOOKS, payload: books });
    } else {
      dispatch({ type: FETCH_MY_BOOKS, payload: {} });
    }
  } catch (error) {
    console.error("Error fetching user books:", error.message);
  }
};
