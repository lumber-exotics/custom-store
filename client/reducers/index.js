// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux'
import catalogueReducer from './catalogueReducer'

const reducers = combineReducers({
  catalogue: catalogueReducer,
});

export default reducers;
