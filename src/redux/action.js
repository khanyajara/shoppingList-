import { type } from "@testing-library/user-event/dist/type";

export const ADD_ITEM = 
'ADD-ITEM';
export const REMOVE_ITEM =
'REMOVE-ITEM';
export const UPDATE_ITEM =
'UPDATE-ITEM';
export const BOUGHT_ITEM =
'BOUGHT-ITEM';
export const ADD_ITEM_QUANTITY =
'ADD-ITEM-QUANTITY';
export const ITEM_CATEGORY =
'ITEM-CATEGORY';
export const SHOP_NAME =
'SHOP-NAME';
export const REGISTER_USER =
'REGISTER-USER';
export const USER_LOGIN =
'USER-LOGIN';
export const LOGOUT_USER = 
'LOGOUT-USER';

export const addItem= (item)=>
({
    type: ADD_ITEM,
    payload: item
});
export const addItemQuantity =(item)=>
({
    type: ADD_ITEM_QUANTITY,
    payload: item

});
export const removeItem = (index)=>
({
    type: REMOVE_ITEM,
    payload: index
});
export const updateItem = (id)=>
({
    type: UPDATE_ITEM,
    payload: id
    
});
export const boughtItem = (id)=>
({
    type: BOUGHT_ITEM,
    payload: id
});
export const itemCategory =(item)=>
({
    type: ITEM_CATEGORY,
    payload:  item
})
export const shopName =(shop)=>
({
    type: SHOP_NAME,
    payload: shop
})
export const registerUser =(userData)=>{
    return(dispatch)=>{
        localStorage.setItem('user',
        JSON.stringify(userData));
        dispatch({
            type:'REGISTER_USER',
            payload:userData,
        })
        
    }
}
export const userlogin = (userData)=>{
    return(dispatch)=>{
        localStorage.setItem('user',
        JSON.stringify(userData));
        dispatch({
            type:'USER_LOGIN',
            payload:userData,
        })
}
}


export const logout =()=>{
    return(dispatch)=>{
        localStorage.removeItem('user');
        dispatch({
            type: 'LOGOUT',
            })
            }
}






