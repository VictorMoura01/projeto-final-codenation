import React from 'react';
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

import imagem from '../../img/imagem.jpg';

export default function Cart({ visible }) {
  return (
    <Container visible={visible}>
      <CartHeader>
        <button type="button">
          <FiArrowLeft size={24} color="#000" />
        </button>
      </CartHeader>

      <CartList>
        <Scroll>
          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>

          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>

          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>

          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>

          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>

          <CartItem>
            <img src={imagem} alt="produto" />
            <div className="item">
              <div className="item-details">
                <strong>Camisa cacto verde</strong>
                <span>Tam.: M</span>
              </div>

              <div className="item-controls">
                <button type="button">
                  <FiMinus size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
            <div className="remove-button">
              <button type="button">
                <FiTrash size={20} />
              </button>
            </div>
          </CartItem>
        </Scroll>
      </CartList>
      {/* <footer>
        <button type="button">Finalizar</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer> */}
    </Container>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
};
