// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response
        })
      });
  }
};

// export const getWood = value => {
//   return {
//     type: types.GET_WOOD,
//     payload:  [{
//       type: 'walnut',
//       image: 'testIMG',
//       description: 'smooth',
//       price: '300',
//       inStock: true,
//     }],
//   }
// };

export const getStain = value => {
  return {
    type: types.GET_STAIN,
    payload:  [{
      type: 'ashe',
      image: 'test.jpg',
      description: 'smoky',
      price: '100',
      inStock: true,
    }],
  }
};

export const submitOrder = () => {
  return {
    type: types.SUBMIT_ORDER
  }
};