import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setQuantity } from '../store/cart';

function CartList({ cart, setQuantityById }) {
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
            const { name, quantity } = cart[id];
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setQuantityById(id, quantity + 1)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => setQuantityById(id, quantity - 1)}
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

CartList.propTypes = {
  cart: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setQuantityById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  setQuantityById: (id, quantity) => dispatch(setQuantity(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
