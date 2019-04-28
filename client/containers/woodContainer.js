import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
import * as actions from '../actions/index';
import WoodBox from '../components/woodbox';

const woodSelectStyle = {  // Color will change when wood is selected,
  textAlign: 'center',
  border: '4px solid black'
}

// CONNECT our redux store, mapStateToProps, mapDispatchToProps
class WoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWoodType: false, // initial state when wood has not been selected.
    };
    this.handleClick = this.handleClick.bind(this); // Bind handleclick to Wood Container
  }

  handleClick(e) {  // handleClick will setState to NOT selected when clicked.
    // this.setState(state => ({
    //   selectedWoodType: !state.selectedWoodType
    // }));
    e.stopPropagation();
    console.log(e.target.id);
  }

  render() {
    return (
      <div style={woodSelectStyle}>
      {this.props.wood.map((element, index) => (<WoodBox id={index} clickHandler={this.handleClick} key={index} type={element.type} image={element.image} description={element.description}  price={element.price} inStock={element.inStock} />))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
    wood: store.catalog.wood
});


// Runs our action creator
const mapDispatchToProps = dispatch => ({
  getWood: val => dispatch(actions.getWood(val))
});

// This is how are container knows what method is has available to it in its access to the store

export default connect(mapStateToProps, mapDispatchToProps)(WoodContainer);
