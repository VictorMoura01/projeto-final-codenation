import produce from 'immer';

const INITIAL_STATE = {
  cartVisible: false,
  filterVisible: false,
};

export default function drawer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/TOGGLE_VISIBLE':
      return produce(state, (draft) => {
        draft.cartVisible = !draft.cartVisible;
      });
    case '@filter/TOGGLE_VISIBLE':
      return produce(state, (draft) => {
        draft.filterVisible = !draft.filterVisible;
      });
    default:
      return state;
  }
}
