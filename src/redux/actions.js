export const increaseQuantity = (id) => ({
    type: 'INCREASE_QUANTITY',
    payload: id,
  });
  
  export const decreaseQuantity = (id) => ({
    type: 'DECREASE_QUANTITY',
    payload: id,
  });
  
  export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
  });
  