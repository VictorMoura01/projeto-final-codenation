import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addToCart } from '../../store/modules/cart/actions';

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
  const dispatch = useDispatch();
  const productImageReplace =
    'https://via.placeholder.com/470x594/FFF/?text=Imagem+Indispon%C3%ADvel';
  const [sizeIndex, setSizeIndex] = useState(-1);
  const [showWarning, setShowWarning] = useState(false);
  const { productName } = useParams();
  const product = useSelector((state) =>
    state.products.find(
      (p) => p.name === productName.replace(/-/g, ' ').toUpperCase()
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

  function handleAddToCart() {
    if (sizeIndex === -1) {
      setShowWarning(true);
    }
    setShowWarning(false);
    const { name, actual_price, installments, image } = product;
    const selectedSize = product.sizes[sizeIndex];
    dispatch(
      addToCart({ name, actual_price, installments, image, size: selectedSize })
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
          <WarningText visible={showWarning}>
            É necessário escolher um tamanho
          </WarningText>
          <div>
            {product.sizes.map(
              (item, index) =>
                item.available && (
                  <SizeButton
                    selected={sizeIndex === index}
                    key={item.size}
                    onClick={() => {
                      setSizeIndex(index);
                    }}
                  >
                    {item.size}
                  </SizeButton>
                )
            )}
          </div>
        </ProductSizes>
        <AddButton onClick={handleAddToCart}>Adicionar à Sacola</AddButton>
      </ProductSummary>
    </Container>
  );
}
