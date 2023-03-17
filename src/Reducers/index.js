// Root reducer

import changeStateOfcounter from './updown';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  changeStateOfcounter,
});

export default rootReducer;
