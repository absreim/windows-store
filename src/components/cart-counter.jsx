import React from 'react';
import { connect } from 'react-redux';

function CartCounter({ numItems }) {
  return (
    <p>
      Number of items in cart:
      {numItems}
    </p>
  );
}

const mapStateToProps = ({ cart }) => ({
  numItems: Object.keys(cart).reduce((prevCount, id) => (
    cart[id].quantity + prevCount
  ), 0),
});

export default connect(mapStateToProps)(CartCounter);
