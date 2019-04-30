import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, history } from 'react-router-dom';
import { withRouter } from 'react-router';
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
    this.selectItemClickHandler = this.selectItemClickHandler.bind(this);
    this.goToStainSelection = this.goToStainSelection.bind(this);
  }

  componentDidMount() {
    this.props.getWood();
  }

  selectItemClickHandler(e) {
    const payloadObj = {};
    payloadObj.type = e.currentTarget.id;
    console.log('wood types', this.props.wood);
    this.props.wood.forEach(item => {
      if (payloadObj.type === item.type) {
        payloadObj.price = parseInt(item[ 'price' ]);
      }
    });
    // select wood type for cart
    this.props.selectWood(payloadObj);
    this.setState({
      selectedItem: e.currentTarget.id
    });
  }

  goToStainSelection() {
    if (this.state.selectedItem !== false) {
      const {history} = this.props;
      history.push('/stain');
    }
  }

  render() {
    const woodBoxes = this.props.wood.map(el => (
      <ProductDisplay key={ el.type } type={ el.type } image={ el.image } description={ el.description }
                      price={ el.price } inStock={ el.inStock } selectedItem={ this.state.selectedItem }
                      selectItemClickHandler={ this.selectItemClickHandler }/>
    ));

    return (
      <div>
        <h1>Select your hardwood type:</h1>
        { woodBoxes }
        <button onClick={this.goToStainSelection}>Next step: Select your stain</button>
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
  getWood: () => dispatch(actions.getWood()),
  selectWood: (value) => dispatch(actions.selectWood(value))
});

// This is how are container knows what method is has available to it in its access to the store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WoodContainer));
