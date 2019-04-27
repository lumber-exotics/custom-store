// ACTIONS
// import axios from 'axios';

import * as types from '../constants/actionTypes';

export const getWood = value => {
  return {
    type: types.GET_STAIN,
    payload: value
    // payload:  [{
    //   type: 'walnut',
    //   image: 'testIMG',
    //   description: 'smooth',
    //   price: '300',
    //   instock: true
    // }],
  }
};
