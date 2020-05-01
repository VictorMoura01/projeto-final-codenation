import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.css';

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
          <span className="product__price product__price--regular">
            {product.regular_price}
          </span>
        )}
        <span className="product__price">{product.actual_price}</span>
        <span className="product__price product__price--installment">
          em até {product.installments}
        </span>
      </div>
    );
  }

  return (
    <main className="product">
      <figure className="image__container">
        {product.on_sale && <SalesTag>-{product.discount_percentage}</SalesTag>}
        <img src={product.image || productImageReplace} alt="produto" />
      </figure>
      <div className="product__description">
        <h3 className="product__name">{product.name}</h3>
        {renderPrice()}
        <div className="product__sizes">
          <p className="size__text">Escolha um tamanho</p>
          <div>
            {product.sizes.map(
              (item, index) =>
                item.available && (
                  <button
                    className="product__size-button"
                    key={item.size}
                    type="button"
                    selected={index === selectedSizeIndex}
                    onClick={() => {}}
                  >
                    {item.size}
                  </button>
                )
            )}
          </div>
        </div>
        <button className="product__add-button" type="button">
          Adicionar à Sacola
        </button>
      </div>
    </main>
  );
}
