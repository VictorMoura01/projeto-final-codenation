import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Main,
  SizeButton,
  ProductImagesWrapper,
  ProductSummaryWrapper,
} from './styles';

export default function Details() {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1);
  const { product_name } = useParams();

  return (
    <Main>
      <h1>{product_name}</h1>
      {/* <ProductImagesWrapper>
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
      </ProductSummaryWrapper> */}
    </Main>
  );
}
