import { createStore } from "redux";
import shoppingListReducer from "./reducer";
 

const store = createStore(shoppingListReducer);

export default store;