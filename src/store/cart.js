import { getDataSourceItems } from './mock-data-source';

const GOT_INVENTORY = 'GOT_INVENTORY';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const getInventory = () => (dispatch) => (
  dispatch(gotInventory(getDataSourceItems()))
);

const gotInventory = (inventory) => ({
  type: GOT_INVENTORY,
  inventory
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  id
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  id
});

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_INVENTORY:
      Object.keys(action.inventory).forEach((id) => {
        action.inventory[id].quantity = 0;
      });
      return action.inventory;
    case INCREMENT_QUANTITY: {
      const id = action.id;
      const newCart = Object.assign({}, state.cart);
      const newCartItem = Object.assign({}, newCart[id]);
      newCartItem.quantity++;
      newCart[id] = newCartItem;
      return newCart;
    }
    case DECREMENT_QUANTITY: {
      const id = action.id;
      const newCart = Object.assign({}, state.cart);
      const newCartItem = Object.assign({}, newCart[id]);
      newCartItem.quantity--;
      newCart[id] = newCartItem;
      return newCart;
    }
    default:
      return state;
  }
}
