import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

import { SalesTag } from '../../styles/SalesTag';

export default function Product({ product }) {
  const productImageReplace =
    'https://via.placeholder.com/470x594/FFF/?text=Imagem+Indispon%C3%ADvel';

  function generateLink() {
    return `details/${product.name.replace(/\s+/g, '-').toLowerCase()}`;
  }

  return (
    <li>
      <Link className="product__link" to={generateLink()}>
        {product.on_sale && <SalesTag>{product.discount_percentage}</SalesTag>}
        <figure className="product__figure">
          <img src={product.image || productImageReplace} alt={product.name} />
        </figure>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__prices">
          {product.on_sale && (
            <span className="product__price product__price--regular">
              {product.regular_price}
            </span>
          )}
          <span className="product__price">{product.actual_price}</span>
        </div>
      </Link>
    </li>
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
  }).isRequired,
};
