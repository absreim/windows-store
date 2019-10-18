import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CartCounter({ numItems }) {
  return (
    <p>
      Number of items in cart:&nbsp;
      {numItems}
    </p>
  );
}

CartCounter.propTypes = {
  numItems: PropTypes.number.isRequired,
};

const mapStateToProps = ({ cart }) => ({
  numItems: Object.keys(cart).reduce((prevCount, id) => (
    cart[id].quantity + prevCount
  ), 0),
});

export default connect(mapStateToProps)(CartCounter);
