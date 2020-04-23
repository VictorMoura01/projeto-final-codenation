import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import produtosJson from '../../db.json';
import imagem from '../../img/imagem.jpg';
import { formataPreco } from '../../util/format';

import {
  Main,
  SizeButton,
  ProductImagesWrapper,
  ProductSummaryWrapper,
} from './styles';

export default function Details() {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1);
  const { id } = useParams();
  const product = produtosJson[id - 1];

  function renderPrice() {
    return product.promocao ? (
      <span>
        <strike>{formataPreco(product.preco)}</strike>{' '}
        {formataPreco(product.preco * (1 - product.promocao))}
      </span>
    ) : (
      <span>{formataPreco(product.preco)}</span>
    );
  }

  const spanPreco = useMemo(() => renderPrice(), [product]);

  return (
    <Main>
      <ProductImagesWrapper>
        <img src={imagem} alt="produto" />
      </ProductImagesWrapper>
      <ProductSummaryWrapper>
        <strong>{product.nome}</strong>
        <div className="product-sizes">
          {product.tamanho.map((size, index) => (
            <SizeButton
              key={size}
              type="button"
              selected={index === selectedSizeIndex}
              onClick={() => {}}
            >
              {size}
            </SizeButton>
          ))}
        </div>
        {spanPreco}
        <button className="main-button" type="button">
          COMPRAR
        </button>
      </ProductSummaryWrapper>
    </Main>
  );
}
