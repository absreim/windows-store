import React from 'react';
import {connect} from 'react-redux';

const CartCounter = function ({numItems}) {
  return (
    <p>Number of items in cart:&nbsp;{numItems}</p>
  );
}

const mapStateToProps = (state) => ({
  numItems: Object.keys(state.cart).reduce((id, prevCount) => (
    state.cart[id].quantity + prevCount
  ), 0),
})

export default connect(CartCounter)(mapStateToProps);
