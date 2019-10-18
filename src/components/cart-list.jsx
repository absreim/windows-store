import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setQuantity } from '../store/cart';

function formatTwoDigitLeadingZero(number) {
  return number < 10
    ? `0${number}`
    : Number(number).toString();
}

function formatPrice(totalCents) {
  const numDollars = Math.floor(totalCents / 100);
  const numCents = totalCents - numDollars * 100;
  const numCentsStr = formatTwoDigitLeadingZero(numCents);
  return `$${numDollars}.${numCentsStr}`;
}

function CartList({ cart, setQuantityById }) {
  return (
    <table className="cart-list">
      <thead>
        <tr>
          <th>Image</th>
          <th>Version</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Increment</th>
          <th>Decrement</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(cart).map((id) => {
            const {
              name, quantity, price, imgSrc,
            } = cart[id];
            return (
              <tr key={id}>
                <td>
                  <img
                    src={imgSrc}
                    alt={`Packaging for ${name}.`}
                    className="cart-list__image"
                  />
                </td>
                <td>{name}</td>
                <td>{formatPrice(price)}</td>
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
      price: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
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
