import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action"; // If logout action is used, you can keep it; if not, remove it.
import { Link, Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import AddItem from "./addItem";
import ShoppingList from "./shoppinglist";
import CategoryItem from "./categoryitem";
import './home.css'; // Updated to use correct import syntax for CSS

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (storedUser) {
            setIsAuthenticated(true);
            setLoggedInUser(storedUser);
        }
        setLoading(false); 
    }, []);
    
    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        setLoggedInUser(user);
        setIsAuthenticated(true);
    };
    
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        setIsAuthenticated(false);
        navigate("/"); // Navigate to the home page after logging out
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
            <div className="todo-app">
                <h1 className="todo-title">Shopping List</h1>
                <button onClick={handleLogout}>Logout</button>
                <AddItem />
                <CategoryItem />
            </div>
            <div className="lists">
                <ShoppingList />
            </div>
        </div>
    );
};

export default Home;
