import React, {useState} from "react";
import { useDispatch} from 'react-redux';
import { addItem, ADD_ITEM } from "../action";
import { useSelector } from "react-redux";

const AddItem = ()=>{
    const [item,setItem]=useState('');
    const dispatch = useDispatch();

    const submitItem = (e)=>{
        e.preventDefault();
        if (item){
            dispatch(addItem(item));
            setItem('');
        }
    };

    return (
        <form onSubmit={submitItem}>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}
            placeholder="Add a new item "/>
            <button type="submit">Add</button>
        </form>
    );
};
export default AddItem;