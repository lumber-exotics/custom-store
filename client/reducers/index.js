// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux'
import catalogReducer from './catalogReducer'

const reducers = combineReducers({
  catalog: catalogReducer,
});

export default reducers;
