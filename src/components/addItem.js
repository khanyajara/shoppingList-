import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";
import CategoryNavigation from "./CategoriesNav"; // Ensure this is correctly imported

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");
    const [shop, setShop] = useState("");
    const [shoppingList, setShoppingList] = useState(""); // New state for selected shopping list
    const [items, setItems] = useState([]); // New state for the list of items
    const [sharedWith, setSharedWith] = useState(""); // New state for sharing lists

    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim() && quantity > 0 && category && shoppingList) { // Check if all fields are filled
            const newItem = { id: Date.now(), name: item, shop: shop, quantity: quantity, category: category, shoppingList: shoppingList, sharedWith: sharedWith || null };
            dispatch(addItem(newItem)); 
            setItems((prevItems) => [...prevItems, newItem]); // Update the list of items
            setItem('');
            setShop("");
            setQuantity(1);
            setCategory("");
            setShoppingList(""); // Reset the selected shopping list
            setSharedWith(""); // Reset shared with input
        }
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
                <br />
                
                <button type="submit" className="add-item__btn">Add</button>
            </form>
            
            <div className="item-list">
                <h3>Added Items</h3>
                {shoppingLists.map((list) => (
                    <div key={list}>
                        <h4>{list}</h4>
                        <ul>
                            {items
                                .filter(item => item.shoppingList === list) 
                                .map(item => (
                                    <li key={item.id}>
                                        {item.name} - {item.quantity} - {item.category} (from {item.shop})
                                        {item.sharedWith && <span> (Shared with: {item.sharedWith})</span>}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItem;
