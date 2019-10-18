import getDataSourceItems from './mock-data-source';

const GOT_INVENTORY = 'GOT_INVENTORY';
const SET_QUANTITY = 'SET_QUANTITY';

const gotInventory = (inventory) => ({
  type: GOT_INVENTORY,
  inventory,
});

export const getInventory = () => (dispatch) => (
  dispatch(gotInventory(getDataSourceItems()))
);

export const setQuantity = (id, amount) => ({
  type: SET_QUANTITY,
  id,
  amount,
});

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_INVENTORY: {
      const { inventory } = action;
      Object.keys(inventory).forEach((id) => {
        inventory[id].quantity = 0;
      });
      return inventory;
    }
    case SET_QUANTITY: {
      const { id, amount } = action;
      const newCart = { ...state };
      const newCartItem = { ...newCart[id] };
      newCartItem.quantity = amount;
      newCart[id] = newCartItem;
      return newCart;
    }
    default:
      return state;
  }
}
