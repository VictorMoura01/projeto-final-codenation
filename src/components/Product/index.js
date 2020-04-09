import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addToCart } from '../../store/modules/cart/actions';
import imagem from '../../img/imagem.jpg';

import { Item, SizeButton } from './styles';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(-1);

  function handleAddProduct() {
    dispatch(addToCart(product, selectedSizeIndex));
  }

  function renderSale() {
    return <div className="product-sale">{product.promocao * 100} %</div>;
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
      <div className="product-sizes">
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
      </div>
      {renderPrice()}
      <button
        type="button"
        disabled={selectedSizeIndex < 0}
        onClick={() => handleAddProduct()}
      >
        ADICIONAR
      </button>
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
