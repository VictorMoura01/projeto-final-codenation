import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../../store/modules/products/actions';
import api from '../../services/api';
import Product from '../../components/Product';

import './style.css';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('catalog');
      dispatch(store(response.data));
    }
    if (products.length === 0) getProducts();
  }, []);

  return (
    <main className="products__container">
      <ul className="products__list">
        {products.map((prod) => (
          <Product product={prod} key={prod.code_color} />
        ))}
      </ul>
    </main>
  );
}
