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

import imagem from '../../img/imagem.jpg';

export default function Cart({ visible }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveItem(index) {
    dispatch(removeFromCart(index));
  }

  return (
    <Container visible={visible}>
      <CartHeader>
        <button type="button">
          <FiArrowLeft size={24} color="#000" />
        </button>
      </CartHeader>

      <CartList>
        <Scroll>
          {cart.map((product, index) => (
            <CartItem>
              <img src={imagem} alt="produto" />
              <div className="item-container">
                <div className="item-details">
                  <strong>{product.nome}</strong>
                  <span>Tam.: {product.size}</span>
                </div>

                <div className="item-controls">
                  <button type="button">
                    <FiMinus size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <FiPlus size={20} />
                  </button>
                </div>
              </div>
              <div className="remove-button">
                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <FiTrash size={20} />
                </button>
              </div>
            </CartItem>
          ))}
        </Scroll>
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
};
