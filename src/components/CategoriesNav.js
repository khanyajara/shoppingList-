import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";
import CategoryNavigation from "./CategoriesNav"; // Ensure this is correctly imported

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");
    const [shop, setShop] = useState("");
    const [shoppingList, setShoppingList] = useState(""); // Selected shopping list
    const [items, setItems] = useState([]); // List of items
    const [sharedWith, setSharedWith] = useState(""); // User to share with
    const [sharedLists, setSharedLists] = useState([]); // Shared shopping lists
    const [expandedList, setExpandedList] = useState(null); // Track expanded list for collapsible functionality

    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim() && quantity > 0 && category && shoppingList) { // Check if all fields are filled
            const newItem = { id: Date.now(), name: item, shop, quantity, category, shoppingList };
            dispatch(addItem(newItem)); 
            setItems((prevItems) => [...prevItems, newItem]); // Update the list of items
            setItem('');
            setShop("");
            setQuantity(1);
            setCategory("");
            setShoppingList(""); // Reset selected shopping list
        }
    };

    // Function to share the shopping list with others
    const shareShoppingList = () => {
        if (shoppingList && sharedWith) {
            setSharedLists((prevSharedLists) => [
                ...prevSharedLists,
                { listName: shoppingList, sharedWith }
            ]);
            setSharedWith(""); // Reset the input after sharing
        }
    };

    // Function to toggle list expansion
    const toggleList = (listName) => {
        setExpandedList(expandedList === listName ? null : listName);
    };

    // Example shopping lists (this could be dynamic in a real application)
    const shoppingLists = ["Groceries", "Electronics", "Clothing", "Household", "Miscellaneous"];

    return (
        <div className="newItem">
            <CategoryNavigation />
            <form onSubmit={submitItem} className="add-item">
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Add a new item"
                    className="add-item__input"
                />
                <input
                    type="text"
                    value={shop}
                    onChange={(e) => setShop(e.target.value)}
                    placeholder="Add a new shop name"
                    className="add-item__input"
                /> <br />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.valueAsNumber)}
                    placeholder="Add quantity"
                    min="1"
                    className="add-item__input"
                />
                
                <select 
                    id="category" 
                    name="category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}  
                    className="add-item__input"
                >
                    <option value="">Select a category</option> 
                    <option value="drink">Drink</option>
                    <option value="personal Care">Personal Care</option>
                    <option value="snacks">Snacks</option>
                    <option value="pantry Items">Pantry Items</option>
                    <option value="fashion and Apparel">Fashion and Apparel</option>
                    <option value="household">Household</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="pet Care">Pet Care</option>
                    <option value="meat">Meat</option>
                    <option value="veggies">Veggies</option>
                    <option value="Cereal">Cereal</option>
                </select>
                <br />

                <select 
                    id="shoppingList" 
                    name="shoppingList" 
                    value={shoppingList} 
                    onChange={(e) => setShoppingList(e.target.value)}  
                    className="add-item__input"
                >
                    <option value="">Select a shopping list</option> 
                    {shoppingLists.map((list, index) => (
                        <option key={index} value={list}>{list}</option>
                    ))}
                </select>
                <br />

                <input
                    type="text"
                    value={sharedWith}
                    onChange={(e) => setSharedWith(e.target.value)}
                    placeholder="Share with (email or username)"
                    className="add-item__input"
                />
                <button type="button" onClick={shareShoppingList} className="add-item__btn">Share List</button>
                <br />
                
                <button type="submit" className="add-item__btn">Add Item</button>
            </form>
            
            <div className="item-list">
                <h3>Shopping Lists</h3>
                {shoppingLists.map((list) => (
                    <div key={list} className="shopping-list">
                        <h4 onClick={() => toggleList(list)} style={{ cursor: 'pointer' }}>
                            {list} {expandedList === list ? "▼" : "▶"}
                        </h4>
                        {expandedList === list && (
                            <ul className="item-subfolder">
                                {items
                                    .filter(item => item.shoppingList === list) // Filter items by shopping list
                                    .map(item => (
                                        <li key={item.id}>
                                            {item.name} - {item.quantity} - {item.category} (from {item.shop})
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div className="shared-lists">
                <h3>Shared Shopping Lists</h3>
                <ul>
                    {sharedLists.map((sharedList, index) => (
                        <li key={index}>
                            {sharedList.listName} - Shared with: {sharedList.sharedWith}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddItem;
