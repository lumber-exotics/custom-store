import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
import * as actions from '../actions/index';
import StainBox from '../components/stainbox';

// CONNECT our redux store, mapStateToProps, mapDispatchToProps
class StainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.stain.map((element, index) => (<StainBox key={index} type={element.type} image={element.image} description={element.description}  price={element.price} inStock={element.inStock} />))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
    stain: store.catalog.stain
});

// Runs our action creator
const mapDispatchToProps = dispatch => ({
  getStain: val => dispatch(actions.getStain(val))
});

// This is how are container knows what method is has available to it in its access to the store

export default connect(mapStateToProps, mapDispatchToProps)(StainContainer);
