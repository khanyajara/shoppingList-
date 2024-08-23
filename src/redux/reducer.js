import { ADD_ITEM, REMOVE_ITEM } from "./action";
//import { initialState } from "./reducer";

const initialState = {
    items:[],
};

const shoppingListReducer = (state = initialState, action)=>
{
    switch (action.type){
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]};
        case REMOVE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload.id)};
            default:
                return state;

    }
}
export default shoppingListReducer;