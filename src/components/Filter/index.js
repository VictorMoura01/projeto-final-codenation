import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  FilterHeader,
  FilterWrapper,
  FilterList,
  FilterItem,
  ProductFigure,
  ProductSummary,
  ProductName,
  ProductPrice,
} from './styles';

export default function Filter({ visible, handleBackClick }) {
  const productImageReplace =
    'https://via.placeholder.com/470x594/FFF/?text=Imagem+Indispon%C3%ADvel';
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleFilterChange(event) {
    const filter = event.target.value.toUpperCase();
    if (filter.length >= 3) {
      const filtered = products.filter((product) =>
        product.name.includes(filter)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }

  return (
    <Container visible={visible}>
      <FilterHeader>
        <button type="button" onClick={handleBackClick}>
          <FiArrowLeft size={24} color="#000" />
        </button>
        <span>Buscar Produtos</span>
      </FilterHeader>
      <FilterWrapper>
        <input
          type="text"
          placeholder="Buscar produto..."
          onChange={(e) => handleFilterChange(e)}
        />
      </FilterWrapper>
      <FilterList>
        {filteredProducts.map((product) => (
          <FilterItem>
            <ProductFigure>
              <img
                src={product.image || productImageReplace}
                alt={product.name}
              />
            </ProductFigure>
            <ProductSummary>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.actual_price}</ProductPrice>
              <ProductPrice installments>{product.installments}</ProductPrice>
            </ProductSummary>
          </FilterItem>
        ))}
      </FilterList>
    </Container>
  );
}

Filter.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleBackClick: PropTypes.func.isRequired,
};
