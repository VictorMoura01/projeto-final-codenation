import { combineReducers } from 'redux';

import cart from './cart/reducer';
import products from './products/reducer';
import drawer from './drawer/reducer';

export default combineReducers({
  cart,
  products,
  drawer,
});
