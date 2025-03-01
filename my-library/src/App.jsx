import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import Login from "./pages/Login";
import MyBooks from "./pages/MyBooksPage"; 
//import Home from "./pages/Home";
import Navbar from "./components/Navbar";
//import "./styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/my-books" element={<MyBooks />} /> {/* Add this route */}
          </Routes>
        </div>
      </Router>
      </Provider>
  );
};

export default App;
