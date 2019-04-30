import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import * as actions from '../actions';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  handleClick() {
    const {history} = this.props;
    history.push('/stain');
  }

  placeOrder(e) {
    e.preventDefault();
    const {history} = this.props;
    history.push('/success');
  }

  render() {
    return (
      <div>
        <div>
          <h2>Your order</h2>
          <div>Type of wood: { this.props.selectedWood.type }</div>
          <div>Stain color: { this.props.selectedStain.type }</div>
          <div>Total: { this.props.total }</div>
        </div>
        <div>
          <button onClick={this.handleClick}>Go back</button>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" required/>
            </div>
            <div>
              <label>Email:</label>
              <input type="email" required/>
            </div>
            <button type="button" onClick={this.placeOrder}>Place order</button>
          </form>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));