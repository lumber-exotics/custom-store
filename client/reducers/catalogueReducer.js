import * as types from '../constants/actionTypes';

const initialState = {
  wood: [{
    type: '',
    image: '',
    description: '',
    price: '',
    instock: true
  }],
  stain: [{
    type: '',
    image: '',
    description: '',
    price: '',
    instock: true
  }]
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETWOOD:
      return {
        ...state,
        wood: action.payload
      };
    case types.GETSTAIN:
      return {
        ...state,
        stain: action.payload
        };

export default catalogueReducer;
