const initialState = { books: [], myBooks: [] };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.payload };

    case "ADD_TO_MY_BOOKS":
      // Make sure bookData has all the necessary properties (title, status, rating, etc.)
      return { ...state, myBooks: [...state.myBooks, action.payload.bookData] };

      case "UPDATE_BOOK_STATUS":
      return {
        ...state,
        myBooks: state.myBooks.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, status: action.payload.status } // Update only the book with the matching ID
            : book
        ),
      };

    case "UPDATE_BOOK_RATING":
      return {
        ...state,
        myBooks: state.myBooks.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, rating: action.payload.rating } // Update only the book with the matching ID
            : book
        ),
      };

    default:
      return state;
  }
};
