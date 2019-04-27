import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions/index';
import WoodBox from '../components/woodbox';

// CONNECT our redux store, mapStateToProps, mapDispatchToProps
class WoodContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Test</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
    wood: store.catalogue.wood  // From our combinedReducer (index.js), catalogue -> which has the value of our catalogueReducer -> which lives in catalogueReducer.js
});


// Runs our action creator
const mapDispatchToProps = dispatch => ({
  getWood: val => dispatch(actions.getWood(val))
});

// This is how are container knows what method is has available to it in its access to the store
export default connect(mapStateToProps, mapDispatchToProps)(WoodContainer);
