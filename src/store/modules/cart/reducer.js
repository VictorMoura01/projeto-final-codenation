import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, (draft) => {
        const existingProduct = draft.products.find(
          (p) => p.size.sku === action.payload.product.size.sku
        );
        if (existingProduct) {
          existingProduct.amount += action.payload.amount;
        } else {
          draft.products.push({ ...action.payload.product, amount: 1 });
        }
        draft.totalItems = draft.products.reduce((accumulator, product) => {
          return accumulator + product.amount;
        }, 0);
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, (draft) => {
        draft.products.splice(action.payload.index, 1);
        draft.totalItems = draft.products.reduce((accumulator, product) => {
          return accumulator + product.amount;
        }, 0);
      });
    default:
      return state;
  }
}
