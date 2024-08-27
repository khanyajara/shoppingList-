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


