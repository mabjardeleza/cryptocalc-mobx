import { combineReducers } from 'redux';

import { prices } from './prices';
import { rates } from './rates';

export default combineReducers({
  prices,
  rates,
});
