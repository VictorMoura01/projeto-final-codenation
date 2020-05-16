import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiArrowLeft, FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

import {
  Container,
  CartHeader,
  CartList,
  Scroll,
  CartItem,
  Total,
} from './styles';

import { removeFromCart } from '../../store/modules/cart/actions';

export default function Cart({ visible, handleBackClick }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveItem(index) {
    dispatch(removeFromCart(index));
  }

  return (
    <Container visible={visible}>
      <CartHeader>
        <button type="button" onClick={handleBackClick}>
          <FiArrowLeft size={24} color="#000" />
        </button>
        <span>Sacola ({cart.length})</span>
      </CartHeader>
      <CartList>
        {/* <Scroll> */}
        {cart.map((product, index) => (
          <CartItem>
            <figure>
              <img src={product.image} alt="produto" />
            </figure>
            <div>
              <div className="cart-item__summary">
                <span className="cart_item__name">{product.name}</span>
                <span className="cart-item__size">
                  Tam.: {product.size.size}
                </span>
                <span className="cart-item__price">
                  {product.actual_price} em até {product.installments}
                </span>
              </div>
              <div className="cart-item__action">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div>
              <button type="button" onClick={() => handleRemoveItem(index)}>
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>
        ))}
        {/* </Scroll> */}
      </CartList>
      <footer>
        <Total>
          <strong>Subtotal - R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleBackClick: PropTypes.func.isRequired,
};
