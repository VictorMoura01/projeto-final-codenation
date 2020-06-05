export function addToCart(product, amount = 1) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: { product, amount },
  };
}

export function removeFromCart(index) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    payload: { index },
  };
}
