// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
// import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export default rootReducer;
