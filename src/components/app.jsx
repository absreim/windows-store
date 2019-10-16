import React, { Component, Fragment } from 'react';

import CartCounter from './cart-counter';
import CartList from './cart-list;'

class App extends Component {
  componentDidMount() {
    this.props.getInventory();
  }

  render() {
    return (
      <Fragment>
        <CartCounter />
        <CartList />
      </Fragment>
    );
  }
}
