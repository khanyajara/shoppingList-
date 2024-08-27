import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";
import CategoryItem from "./categoryitem";

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
                        <option value={CategoryItem}>Select a category</option>
                        <option value={CategoryItem}>drink</option>
                        <option value={CategoryItem}>personal Care</option>
                        <option value={CategoryItem}>snacks</option>
                        <option value={CategoryItem}>pantery Items</option>
                        <option value={CategoryItem}>fasion and Apparel</option>
                        <option value={CategoryItem}>household</option>
                        <option value={CategoryItem}>frozen foods</option>
                        <option value={CategoryItem}>pet Care</option>
                        <option value={CategoryItem}>meat</option>
                        <option value={CategoryItem}>veggies</option>
                        <option value={CategoryItem}>Cereal</option>
                    </select>
                    <br/>
                
                <button type="submit" className="add-item__btn">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
