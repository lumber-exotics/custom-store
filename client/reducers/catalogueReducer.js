import * as types from '../constants/actionTypes';


const initialState = {
  wood: [{
    type: 'maple',
    image: 'something.jpg',
    description: 'rough',
    price: '250',
    instock: true
  }],
  stain: [{
    type: 'ashe',
    image: 'something.jpg',
    description: 'ashy',
    price: '150',
    instock: true
  }]
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETWOOD:
      return {
        ...state,
        //wood: action.payload
      };
    case types.GETSTAIN:
      return {
        ...state,
        //stain: action.payload
        };
    default:
      return state;
  }
}
export default catalogueReducer;
