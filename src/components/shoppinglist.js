import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/action";


const ShoppingList =()=>{
    const dispatch = useDispatch();
    const items = useSelector((state)=> state.items);

    return (
        <ul>
           {items.map((item, index) => (
    <li key={index}>
        {item}{' '}
        <button onClick={() => dispatch(removeItem(index))}>Remove</button>
    </li>
))}

        </ul>
    );
};
export default ShoppingList;