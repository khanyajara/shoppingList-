import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action"; // Ensure addItem is imported from the correct path
import { useSelector } from "react-redux"; // useSelector is not used in this component, consider removing if unnecessary

const AddItem = () => {
    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    const submitItem = (e) => {
        e.preventDefault();
        if (item.trim()) { // trim to avoid adding items with only spaces
            dispatch(addItem(item));
            setItem('');
        }
    };

    return (
        <form onSubmit={submitItem}>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add a new item"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItem;
