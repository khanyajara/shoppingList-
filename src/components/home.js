import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/action";

const Home = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
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

export default Home;
