import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index';

const Cart = props => {
  return (
    <div>Cart</div>
  );
};

const mapStateToProps = store => ({
  selectedWood: store.cart.wood,
  selectedStain: store.cart.stain,
});

const mapDispatchToProps = dispatch => ({
  submitOrder: dispatch(() => actions.submitOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);