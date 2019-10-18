import React from 'react';
import {connect} from 'react-redux';

import {setQuantity} from '../store/cart';

const CartList = function ({cart, setQuantity}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Version</th>
          <th>Quantity</th>
          <th>Increment</th>
          <th>Decrement</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(cart).map((id) => {
            const {name, quantity} = cart[id];
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setQuantity(id, quantity + 1)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => setQuantity(id, quantity - 1)}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
  setQuantity: (id, quantity) => dispatch(setQuantity(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
