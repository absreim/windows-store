import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CartCounter from './cart-counter';
import CartList from './cart-list';
import { getInventory } from '../store/cart';

class App extends Component {
  componentDidMount() {
    const { getItemList } = this.props;
    getItemList();
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

App.propTypes = {
  getItemList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getItemList: () => dispatch(getInventory()),
});

export default connect(null, mapDispatchToProps)(App);
