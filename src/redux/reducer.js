import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    BOUGHT_ITEM,
    ITEM_CATEGORY,
    SHOP_NAME,
    REGISTER_USER,
    USER_LOGIN,
    LOGOUT_USER,
  } from "./action";
  
  const initialState = {
    items: [],
    user: null,
    shopName: "",
    isAuthenticated: false,
  };
  
  const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return { ...state, items: [...state.items, action.payload] };
  
      case REMOVE_ITEM:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
  
      case ITEM_CATEGORY:
        return {
          ...state,
          items: state.items.filter((item) => item.category === action.payload),
        };
  
      case BOUGHT_ITEM:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, bought: !item.bought } : item
          ),
        };
  
      case UPDATE_ITEM:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
  
      case SHOP_NAME:
        return { ...state, shopName: action.payload };
  
      case REGISTER_USER:
        return { ...state, user: action.payload };
  
      case USER_LOGIN:
        return { ...state, user: action.payload, isAuthenticated: true };
  
      case LOGOUT_USER:
        return { ...state, user: null, isAuthenticated: false };
  
      default:
        return state;
    }
  };
  
  export default shoppingListReducer;