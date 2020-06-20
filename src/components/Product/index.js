import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ProductLink,
  ProductFigure,
  ProductName,
  ProductPrices,
  ProductPrice,
} from './styles';

import { SalesTag } from '../../styles/SalesTag';

export default function Product({ product }) {
  const productImageReplace =
    'https://via.placeholder.com/470x594/FFF/?text=Imagem+Indispon%C3%ADvel';

  return (
    <Container>
      <ProductLink to={`details/${product.productUrl}`}>
        {product.on_sale && <SalesTag>{product.discount_percentage}</SalesTag>}
        <ProductFigure>
          <img src={product.image || productImageReplace} alt={product.name} />
        </ProductFigure>
        <ProductName>{product.name}</ProductName>
        <ProductPrices>
          {product.on_sale && (
            <ProductPrice regular>{product.regular_price}</ProductPrice>
          )}
          <ProductPrice>{product.actual_price}</ProductPrice>
        </ProductPrices>
      </ProductLink>
    </Container>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    code_color: PropTypes.string.isRequired,
    on_sale: PropTypes.bool.isRequired,
    regular_price: PropTypes.string.isRequired,
    actual_price: PropTypes.string.isRequired,
    discount_percentage: PropTypes.string,
    image: PropTypes.string.isRequired,
    productUrl: PropTypes.string.isRequired,
  }).isRequired,
};
