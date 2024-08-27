import { ADD_ITEM, REMOVE_ITEM,UPDATE_ITEM,BOUGHT_ITEM,ITEM_CATEGORY,SHOP_NAME } from "./action";
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
            
        case ITEM_CATEGORY:
            return {...state, items: state.items.filter(item => item.category === action.payload)};
        case BOUGHT_ITEM:
            return {...state, items: state.items.map((items)=>items.id=== action.payload ? {
                ...items, bought: !items.bought}:items)
         }
         case UPDATE_ITEM:
            return{
                ...state,
                items: state.items.map((items) => items.id === action.payload.id ? action.payload :
                items)
                }
                case SHOP_NAME:
                    return {...state, shopName: action.payload};
                    

            default:
                return state;


    }
}  
export default shoppingListReducer;