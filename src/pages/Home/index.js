import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { formataPreco } from '../../util/format';

import Product from '../../components/Product';

import produtosJson from '../../db.json';

import { Container, ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      // const response = await api.get('produtos');
      // const data = response.data.map((produto) => ({
      //   ...produto,
      //   precoFormatado: formataPreco(produto.preco),
      // }));

      // const data = response.data.map(function (produto) {
      //   if (produto.promocao) {
      //     return {
      //       ...produto,
      //       precoFormatado: formataPreco(produto.preco),
      //       precoPromocao: formataPreco(produto.preco * (1 - produto.promocao)),
      //     };
      //   }
      //   return { ...produto, precoFormatado: formataPreco(produto.preco) };
      // });

      const data = produtosJson.map(function (produto) {
        if (produto.promocao) {
          return {
            ...produto,
            precoFormatado: formataPreco(produto.preco),
            precoPromocao: formataPreco(produto.preco * (1 - produto.promocao)),
          };
        }
        return { ...produto, precoFormatado: formataPreco(produto.preco) };
      });
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <Container>
      <ProductList>
        {products.map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </ProductList>
    </Container>
  );
}
