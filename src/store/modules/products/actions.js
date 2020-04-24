export function store(products) {
  return {
    type: '@products/FETCH_PRODUCTS',
    payload: { products },
  };
}
