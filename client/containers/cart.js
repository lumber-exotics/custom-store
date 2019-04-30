import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Your order</h2>
        <div>{this.props.selectedWood.type}</div>
        <div>{this.props.selectedStain.type}</div>
        <div>{this.props.total}</div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  selectedWood: store.cart.wood,
  selectedStain: store.cart.stain,
  total: store.cart.total
});

const mapDispatchToProps = dispatch => ({
  submitOrder: dispatch(() => actions.submitOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);