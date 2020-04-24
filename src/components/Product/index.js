import React from 'react';
import PropTypes from 'prop-types';

import imagem from '../../img/imagem.jpg';

import {
  Wrapper,
  ProductLink,
  ProductFigure,
  ProductName,
  ProductPrice,
  SalesTag,
} from './styles';

export default function Product({ product }) {
  function generateLink() {
    return `details/${product.name.replace(/\s+/g, '-').toLowerCase()}`;
  }

  function renderPrice() {
    if (product.on_sale) {
      return (
        <>
          <span className="__product-price __product-price--from">
            {product.regular_price}
          </span>{' '}
          <span className="__product-price">{product.actual_price}</span>
        </>
      );
    }
    return <span className="__product-price">{product.actual_price}</span>;
  }

  return (
    <Wrapper>
      <ProductLink to={generateLink()}>
        {product.on_sale && <SalesTag>{product.discount_percentage}</SalesTag>}
        <ProductFigure>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg"
            alt={product.name}
          />
        </ProductFigure>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{renderPrice()}</ProductPrice>
      </ProductLink>
    </Wrapper>
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
  }).isRequired,
};
