import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartCounter from './cart-counter';
import CartList from './cart-list';
import { getInventory } from '../store/cart';

class App extends Component {
  componentDidMount() {
    const { getInventory } = this.props;
    getInventory();
  }

  render() {
    return (
      <>
        <CartCounter />
        <CartList />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInventory: () => dispatch(getInventory()),
});

export default connect(null, mapDispatchToProps)(App);
