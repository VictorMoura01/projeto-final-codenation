import { produce } from 'immer';

const INITIAL_STATE = [];
export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@products/FETCH_PRODUCTS':
      return produce(state, () => action.payload.products);
    default:
      return state;
  }
}
