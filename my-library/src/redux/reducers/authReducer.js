// src/redux/reducers/authReducer.js
const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_USER":
        return {
          ...state,
          user: action.payload, // Store the user info
        };
      case "LOGIN_USER":
        return {
          ...state,
          user: action.payload, // Store the user info on login
        };
      case "LOGOUT_USER":
        return {
          ...state,
          user: null, // Reset the user info on logout
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  