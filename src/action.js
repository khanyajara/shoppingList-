export const ADD_ITEM = 
'ADD-ITEM';
export const REMOVE_ITEM =
'REMOVE-ITEM';

export const addItem= (item)=>
({
    type: ADD_ITEM,
    payload: item
});
export const removeItem = (index)=>
({
    type: REMOVE_ITEM,
    payload: index
})