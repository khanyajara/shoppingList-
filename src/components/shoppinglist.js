import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem, boughtItem } from "../redux/action";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);

    return (
        <ul className="todo-list">
            {items.map((item) => (
                <li key={item.id} className="todo">
                    {item.name}<br/>
                    <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                    <button onClick={() => dispatch(updateItem(item.id))}>UPDATE</button>
                    <button className="btns" onClick={() => dispatch(boughtItem(item.id))}>BOUGHT</button>
                </li>

            ))}
        </ul>
    );
};

export default ShoppingList;
