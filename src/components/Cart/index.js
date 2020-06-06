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
  ProductWrapper,
  ProductInfo,
  ProductName,
  ProductSize,
  ProductPrice,
  ProductActions,
  ActionButton,
  Total,
} from './styles';

import { addToCart, removeFromCart } from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

export default function Cart({ visible, handleBackClick }) {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleChangeAmount = (amount, index) => {
    const selectedProduct = cart[index];
    if (selectedProduct.amount === 1 && amount === -1) return;
    dispatch(addToCart(selectedProduct, amount));
  };

  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, product) => {
      return accumulator + product.numericPrice * product.amount;
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
          <CartItem key={product.size.sku}>
            <ProductFigure>
              <img src={product.image} alt="produto" />
            </ProductFigure>
            <ProductWrapper>
              <ProductInfo>
                <div>
                  <ProductName>{product.name}</ProductName>
                  <ProductSize>Tam.: {product.size.size}</ProductSize>
                </div>
                <ProductPrice>{product.actual_price}</ProductPrice>
              </ProductInfo>
              <ProductActions>
                <div>
                  <ActionButton onClick={() => handleChangeAmount(-1, index)}>
                    <FiMinus size={20} />
                  </ActionButton>
                  <span>{product.amount}</span>
                  <ActionButton onClick={() => handleChangeAmount(1, index)}>
                    <FiPlus size={20} />
                  </ActionButton>
                </div>
                <ActionButton remove onClick={() => handleRemoveItem(index)}>
                  <FiTrash size={20} />
                </ActionButton>
              </ProductActions>
            </ProductWrapper>
          </CartItem>
        ))}
      </CartList>
      <Total>
        <span>Total - {formatPrice(total)}</span>
      </Total>
    </Container>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleBackClick: PropTypes.func.isRequired,
};
