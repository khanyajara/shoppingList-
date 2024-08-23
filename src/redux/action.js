export const ADD_ITEM = 
'ADD-ITEM';
export const REMOVE_ITEM =
'REMOVE-ITEM';
export const UPDATE_ITEM =
'UPDATE-ITEM';

export const addItem= (item)=>
({
    type: ADD_ITEM,
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
    
})


