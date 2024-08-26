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
export const updateItem = (index, item)=>
({
    type: UPDATE_ITEM,
    payload: {index, item}
    
});
export const boughtItem = (index)=>
({
    type: BOUGHT_ITEM,
    payload: index
});
export const itemCategory =(index,item)=>
({
    type: ITEM_CATEGORY,
    payload: {index, item}
})


