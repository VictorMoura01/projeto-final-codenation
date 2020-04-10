import produce from 'immer';
import { string } from 'prop-types';

const INITIAL_STATE = [];
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (p) =>
            p.id === action.payload.product.id &&
            p.size ===
              action.payload.product.tamanho[action.payload.selectedSize]
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.payload.product,
            amount: 1,
            size: action.payload.product.tamanho[
              action.payload.selectedSize
            ].toUpperCase(),
          });
        }
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, (draft) => {
        draft.splice(action.payload.index, 1);
      });
    default:
      return state;
  }
}
