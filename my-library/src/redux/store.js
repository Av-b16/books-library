import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import  authReducer  from "./reducers/authReducer";
import { bookReducer } from "./reducers/bookReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Enable Redux DevTools
  applyMiddleware(thunk)
);
