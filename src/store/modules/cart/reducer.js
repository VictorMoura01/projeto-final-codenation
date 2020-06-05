import produce from 'immer';

const INITIAL_STATE = [];
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, (draft) => {
        const existingProduct = draft.find(
          (p) => p.size.sku === action.payload.product.size.sku
        );
        if (existingProduct) {
          existingProduct.amount += action.payload.amount;
        } else {
          draft.push({ ...action.payload.product, amount: 1 });
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
