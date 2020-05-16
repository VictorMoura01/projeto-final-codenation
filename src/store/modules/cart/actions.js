export function addToCart(product) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: { product },
  };
}

export function removeFromCart(index) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    payload: { index },
  };
}
