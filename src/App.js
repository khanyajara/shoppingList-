import React from "react";
import AddItem from "./components/addItem";
import ShoppingList from "./components/shoppinglist";

const App=()=>{
  
  
  return (
    <div>
      <h1>Shopping List</h1>
      <AddItem/>
      <ShoppingList/>
    </div>
  );
};
export default App