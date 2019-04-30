import * as types from '../constants/actionTypes';

const initialState = {
  // wood: [ {
  //   type: 'maple',
  //   image: 'something.jpg',
  //   description: 'rough',
  //   price: '250',
  //   inStock: true
  // }, {
  //   type: 'ash',
  //   image: 'something.jpg',
  //   description: 'simple wood',
  //   price: '250',
  //   inStock: true
  // } ],
  wood: [],
  /*stain: [
    {
      type: 'red',
      image: 'something.jpg',
      description: 'red',
      price: '150',
      inStock: true
    }, {
      type: 'purple',
      image: 'something.jpg',
      description: 'purple',
      price: '150',
      inStock: true
    }
  ]*/
  stain: []
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WOOD:
      return {
        ...state,
        wood: action.payload
      };
    case types.GET_STAIN:
      return {
        ...state,
        stain: action.payload
      };
    default:
      return state;
  }
};

export default catalogReducer;
