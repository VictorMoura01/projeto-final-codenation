export function addToCart(product, selectedSize) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: { product, selectedSize },
  };
}

export function removeFromCart(index) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    payload: { index },
  };
}
