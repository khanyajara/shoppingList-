import React from "react";
import AddItem from "./components/addItem";
import ShoppingList from "./components/shoppinglist";
import Css from './App.css'

const App=()=>{
  
  
  return (
    <div className="root">
      <div className="todo-app">
        <h1 className="todo-title">Shopping List</h1>
        <AddItem/>
      </div>
        <div className="lists"><ShoppingList/></div>
    </div>
  );
};
export default App