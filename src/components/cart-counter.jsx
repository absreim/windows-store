import React from 'react';
import {connect} from 'react-redux';

const CartCounter = function ({numItems}) {
  return (
    <p>Number of items in cart:&nbsp;{numItems}</p>
  );
}

const mapStateToProps = (state) => {
  const keys = Object.keys(state.cart);
  return {
    numItems: keys.reduce((prevCount, id) => (
      state.cart[id].quantity + prevCount
    ), 0),
  }
}

export default connect(mapStateToProps)(CartCounter);
