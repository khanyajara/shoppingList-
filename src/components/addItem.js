import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category,setCategory]=useState("")

    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim() && quantity > 0) {
            const newItem = { id: Date.now(), name: item, quantity: quantity, category:category };
            dispatch(addItem(newItem)); 
            setItem('');
            setQuantity(1);
            setCategory("")
        }
    };

    return (
        <div className="newItem">
            <form onSubmit={submitItem} className="add-item">
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Add a new item"
                    className="add-item__input"
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.valueAsNumber)}
                    placeholder="Add quantity"
                    min="1"
                    className="add-item__input"
                />
                
                <div className="add-item__select">

                    <select id="category" name="category" value={category} onChange={(e) =>
                    setCategory(e.target.value)}>
                        <option value="0">Select a category</option>
                        <option value="drink">Drink</option>
                        <option value="Personal Care">Personal Care</option>
                        <option value="snacks">Snacks</option>
                        <option value="PanteryItems">Pantery Items</option>
                        <option value="fashion and apparel">Fasion and Apparel</option>
                        <option value="houseHold">Household</option>
                        <option value="frozenFoods">frozen Foods</option>
                        <option value="PetCare">Pet Care</option>
                        <option value="Meat">Meat</option>
                        <option value="veggies">Veggies</option>
                    </select>
                </div>
                <button type="submit" className="add-item__btn">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
