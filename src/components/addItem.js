import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action";

const AddItem = () => {
    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim()) {
            dispatch(addItem({ id: Date.now(), name: item })); 
            setItem('');
        }
    };

    return (
        <form onSubmit={submitItem} className="add-todo">
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add a new item"
                className="add-todo__input"
            />
            <button type="submit" className="add-todo__btn">Add</button>
        </form>
    );
};

export default AddItem;
