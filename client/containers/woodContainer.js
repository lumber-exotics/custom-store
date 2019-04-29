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
      selectedWoodType: false, // initial state when wood has not been selected.
    };
    this.handleClick = this.handleClick.bind(this); // Bind handleclick to Wood Container
  }

  componentDidMount() {
    this.props.getWood();
  }

  handleClick(e) {  // handleClick will setState to NOT selected when clicked.
    // this.setState(state => ({
    //   selectedWoodType: !state.selectedWoodType
    // }));
    e.stopPropagation();
    console.log(e.target.id);
  }

  render() {
    /*let woodBoxes;
    if (this.props.wood) {
      woodBoxes = this.props.wood.map(el=> (
        <WoodBox key={el.type} image={el.image} description={el.description} price={el.price} inStock={el.inStock}/>
      ));
    } else {
      woodBoxes = <div>Loading</div>;
    }*/
    const woodBoxes = this.props.wood.map(el=> (
      <ProductDisplay key={el.type} image={el.image} description={el.description} price={el.price} inStock={el.inStock}/>
    ));

    return (
      <div>
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
  getWood: () =>  dispatch(actions.getWood())
});

// This is how are container knows what method is has available to it in its access to the store

export default connect(mapStateToProps, mapDispatchToProps)(WoodContainer);
