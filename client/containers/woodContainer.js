import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
import * as actions from '../actions/index';
import ProductDisplay from '../components/productDisplay';

const woodSelectStyle = {  // Color will change when wood is selected,
  textAlign: 'center',
  border: '4px solid black'
};

// CONNECT our redux store, mapStateToProps, mapDispatchToProps
class WoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: false, // initial state when wood has not been selected.
    };
    this.selectItemClickHandler = this.selectItemClickHandler.bind(this); // Bind handleclick to Wood Container
  }

  componentDidMount() {
    this.props.getWood();
  }

  selectItemClickHandler(e) {  // handleClick will setState to NOT selected when clicked.
    this.setState({
      selectedItem: e.currentTarget.id
    });
  }

  render() {
    const woodBoxes = this.props.wood.map(el=> (
      <ProductDisplay key={el.type} type={el.type} image={el.image} description={el.description} price={el.price} inStock={el.inStock} selectedItem={this.state.selectedItem} selectItemClickHandler={this.selectItemClickHandler}/>
    ));

    return (
      <div>
      <h1>Select your hardwood type:</h1>
        {woodBoxes}
      </div>
    );
  }
}

const mapStateToProps = store => ({
    wood: store.catalog.wood
});

// Runs our action creator
const mapDispatchToProps = dispatch => ({
  // getWood: val => dispatch(actions.getWood(val))
  getWood: () =>  dispatch(actions.getWood()),
});

// This is how are container knows what method is has available to it in its access to the store

export default connect(mapStateToProps, mapDispatchToProps)(WoodContainer);
