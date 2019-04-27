// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

export const getWood = value => {
  return {
    type: types.GETWOOD,
    payload: value
  }
};
