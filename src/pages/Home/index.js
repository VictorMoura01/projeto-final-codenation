import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../../store/modules/products/actions';
import api from '../../services/api';
import Product from '../../components/Product';

import { Container, ProductList } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('catalog');
      const data = response.data.map((product) => ({
        ...product,
        productUrl: `details/${product.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`,
      }));
      dispatch(store(data));
    }
    if (products.length === 0) getProducts();
  }, []);

  return (
    <Container>
      <ProductList>
        {products.map((prod) => (
          <Product product={prod} key={prod.code_color} />
        ))}
      </ProductList>
    </Container>
  );
}
