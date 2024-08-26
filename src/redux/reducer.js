import { ADD_ITEM, REMOVE_ITEM,UPDATE_ITEM,BOUGHT_ITEM,ITEM_CATEGORY } from "./action";
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
            return {...state, items: state.items.filter(item => item.id !== action.payload)};
            case UPDATE_ITEM:
                return {...state, items: state.items.map(item => item.id === action.payload.id ? action
                    .payload : item)};
         case BOUGHT_ITEM:
            return {...state, items: state.items.map(item => item.id === action.payload.id ? {...item, bought: true} : item)};
            

         

            default:
                return state;


    }
}  
export default shoppingListReducer;