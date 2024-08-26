import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    
    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim() && quantity > 0) {
            const newItem = { id: Date.now(), name: item, quantity: quantity };
            dispatch(addItem(newItem)); 
            setItem('');
            setQuantity(1);
        }
    };

    return (
        <div>
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
                <button type="submit" className="add-item__btn">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
