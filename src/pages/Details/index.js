import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Container,
  ImageContainer,
  ProductSummary,
  ProductPrice,
  ProductSizes,
  SizeText,
  WarningText,
  SizeButton,
  AddButton,
} from './styles';

import { SalesTag } from '../../styles/SalesTag';

export default function Details() {
  const productImageReplace =
    'https://via.placeholder.com/470x594/FFF/?text=Imagem+Indispon%C3%ADvel';
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1);
  const { product_name } = useParams();
  const product = useSelector((state) =>
    state.products.find(
      (p) => p.name === product_name.replace(/-/g, ' ').toUpperCase()
    )
  );

  function renderPrice() {
    return (
      <div>
        {product.on_sale && (
          <ProductPrice regular>{product.regular_price}</ProductPrice>
        )}
        <ProductPrice>{product.actual_price}</ProductPrice>
        <ProductPrice installment>em até {product.installments}</ProductPrice>
      </div>
    );
  }

  return (
    <Container>
      <ImageContainer>
        {product.on_sale && <SalesTag>-{product.discount_percentage}</SalesTag>}
        <img src={product.image || productImageReplace} alt="produto" />
      </ImageContainer>
      <ProductSummary>
        <h3>{product.name}</h3>
        {renderPrice()}
        <ProductSizes>
          <SizeText>Escolha um tamanho</SizeText>
          <WarningText>É necessário escolher um tamanho</WarningText>
          <div>
            {product.sizes.map(
              (item, index) =>
                item.available && (
                  <SizeButton
                    selected={selectedSizeIndex === index}
                    key={item.size}
                    onClick={() => {
                      setSelectedSizeIndex(index);
                    }}
                  >
                    {item.size}
                  </SizeButton>
                )
            )}
          </div>
        </ProductSizes>
        <AddButton>Adicionar à Sacola</AddButton>
      </ProductSummary>
    </Container>
  );
}
