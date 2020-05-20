import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiArrowLeft, FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

import {
  Container,
  CartHeader,
  CartList,
  CartItem,
  ProductFigure,
  SummaryWrapper,
  ProductName,
  ProductSize,
  ProductPrice,
  ProductActions,
  Total,
} from './styles';

import { removeFromCart } from '../../store/modules/cart/actions';

export default function Cart({ visible, handleBackClick }) {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  function handleRemoveItem(index) {
    dispatch(removeFromCart(index));
  }

  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, product) => {
      return accumulator + product.numericPrice;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <Container visible={visible}>
      <CartHeader>
        <button type="button" onClick={handleBackClick}>
          <FiArrowLeft size={24} color="#000" />
        </button>
        <span>Sacola ({cart.length})</span>
      </CartHeader>
      <CartList>
        {cart.map((product, index) => (
          <CartItem key={product.code_color}>
            <ProductFigure>
              <img src={product.image} alt="produto" />
            </ProductFigure>
            <SummaryWrapper>
              <ProductName>{product.name}</ProductName>
              <ProductSize>Tam.: {product.size.size}</ProductSize>
              <ProductPrice>{product.actual_price}</ProductPrice>
              <ProductActions>
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <span>{product.amount}</span>
                <button type="button">
                  <FiPlus size={20} />
                </button>
                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <FiTrash size={20} />
                </button>
              </ProductActions>
            </SummaryWrapper>
          </CartItem>
        ))}
      </CartList>
      <footer>
        <Total>
          <strong>Total - R$ {total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleBackClick: PropTypes.func.isRequired,
};
