import React, { useState, useEffect } from 'react';
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
   
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setIsAuthenticated(true);
      setLoggedInUser(storedUser);
    }
    setLoading(false); 
  }, []);
  
 
    
    
  ;

  return (
    <Router>
      
     
           
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Registeruser />} />
              <Route path="/" element={<Login />} />
          </Routes>
      
    </Router>
  );
};

export default App;