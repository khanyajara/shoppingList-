import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category,setCategory]=useState("")
    const [shop,setShop]=useState("")

    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim() && quantity > 0) {
            const newItem = { id: Date.now(), name: item,shop:shop, quantity: quantity, category:category };
            dispatch(addItem(newItem)); 
            setItem('');
            setShop("")
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
                    type="text"
                    value={shop}
                    onChange={(e)=> setShop(e.target.value)}
                    placeholder="Add a new name"
                    className="add-item__input"
                    /> <br/>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.valueAsNumber)}
                    placeholder="Add quantity"
                    min="1"
                    className="add-item__input"
                />
                
               

                    <select id="category" name="category" value={category} onChange={(e) =>
                    setCategory(e.target.value)}  className="add-item__input">
                        <option value="0">Select a category</option>
                        <option value="drink">drink</option>
                        <option value="Personal Care">personal Care</option>
                        <option value="snacks">snacks</option>
                        <option value="PanteryItems">pantery Items</option>
                        <option value="fashion and apparel">fasion and Apparel</option>
                        <option value="houseHold">household</option>
                        <option value="frozenFoods">frozen foods</option>
                        <option value="PetCare">pet Care</option>
                        <option value="Meat">meat</option>
                        <option value="veggies">veggies</option>
                    </select>
                    <br/>
                
                <button type="submit" className="add-item__btn">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
