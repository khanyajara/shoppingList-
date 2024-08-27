import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./components/addItem";
import ShoppingList from "./components/shoppinglist";
import CategoryItem from "./components/categoryitem";
import Registeruser from "./components/register";
import Login from "./components/login";
import { useDispatch } from "react-redux";
import { logoutUser } from "./redux/action"; // Updated path
import { useNavigate } from "react-router-dom";
import './App.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logoutUser());
      navigate("/login");
  };

  return (
      <div className="todo-app">
          <h1 className="todo-title">Shopping List</h1>
          <button onClick={handleLogout}>Logout</button>
          <AddItem />
          <CategoryItem />
          <div className="lists"><ShoppingList /></div>
      </div>
  );
};

const App = () => {
    return (
        <Router>
            <div className="root">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registeruser />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
