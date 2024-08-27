import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem, boughtItem } from "../redux/action";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);

    return (
        <div className="list-container">
            <ul className="todo-list">
                {items.map((item) => (
                   <li
                   key={item.id}
                   className={`todo ${item.bought ? "bought" : ""}`}
               >
                       Item: {item.name}  Shop: {item.shop}  Quantity:{item.quantity} Category:{item.category} <br/>
                       
                        <button className="btns" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                        <button className="btns" onClick={() => dispatch(updateItem(item.id))}>Update</button>
                        <button className="btns" onClick={() => dispatch(boughtItem(item.id))}>
                            {item.bought ? "Undo Bought" : "Bought"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
