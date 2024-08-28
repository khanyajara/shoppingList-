import React, { useState, useEffect, navigate } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./components/addItem";
import ShoppingList from "./components/shoppinglist";
import CategoryItem from "./components/categoryitem";
import Registeruser from "./components/register";
import Login from "./components/login";
import Home from './components/home';
import { useDispatch } from "react-redux";
import { logoutUser } from "./redux/action"; 
import { useNavigate } from "react-router-dom";
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setIsAuthenticated(true);
      setLoggedInUser(storedUser);
    }
    setLoading(false); 
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    setIsAuthenticated(false);
    dispatch(logoutUser()); 
    navigate("/login");  
  };

  return (
    <Router>
      <div className="todo-app">
          <h1 className="todo-title">Shopping List</h1>
          <button onClick={handleLogout}>Logout</button>
          <AddItem />
          <CategoryItem />
          <div className="lists"><ShoppingList /></div>
      </div>
      
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
