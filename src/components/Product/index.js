import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import imagem from '../../img/imagem.jpg';

import { Item } from './styles';

export default function Product({ product }) {
  function renderSale() {
    return <div className="product-sale">-{product.promocao * 100} %</div>;
  }

  function renderPrice() {
    if (product.promocao) {
      return (
        <span>
          <strike>{product.precoFormatado}</strike> {product.precoPromocao}
        </span>
      );
    }
    return <span>{product.precoFormatado}</span>;
  }

  return (
    <Item key={product.id}>
      {product.promocao && renderSale()}
      <img src={imagem} alt="produto_1" />
      <strong>{product.nome}</strong>
      {/* <div className="product-sizes">
        {product.tamanho.map((size, index) => (
          <SizeButton
            key={size}
            type="button"
            selected={index === selectedSizeIndex}
            onClick={() => setSelectedSizeIndex(index)}
          >
            {size}
          </SizeButton>
        ))}
      </div> */}
      {renderPrice()}
      <Link to={`details/${product.id}`}>DETALHES</Link>
    </Item>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    precoFormatado: PropTypes.string.isRequired,
    tamanho: PropTypes.array.isRequired,
    promocao: PropTypes.number,
    precoPromocao: PropTypes.string,
  }).isRequired,
};
