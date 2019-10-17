import { getDataSourceItems } from './mock-data-source';

const GOT_INVENTORY = 'GOT_INVENTORY';
const SET_QUANTITY = 'SET_QUANTITY';

export const getInventory = () => (dispatch) => (
  dispatch(gotInventory(getDataSourceItems()))
);

const gotInventory = (inventory) => ({
  type: GOT_INVENTORY,
  inventory
});

export const setQuantity = (id, amount) => ({
  type: SET_QUANTITY,
  id,
  amount,
});

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_INVENTORY:
      Object.keys(action.inventory).forEach((id) => {
        action.inventory[id].quantity = 0;
      });
      return action.inventory;
    case SET_QUANTITY: {
      const { id, amount } = action;
      const newCart = Object.assign({}, state.cart);
      const newCartItem = Object.assign({}, newCart[id]);
      newCartItem.quantity = amount;
      newCart[id] = newCartItem;
      return newCart;
    }
    default:
      return state;
  }
}
