import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag, FiMoon } from 'react-icons/fi';

import Cart from '../Cart';

import { Container, Navbar, Badge } from './styles';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.length);
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <Navbar>
        <h1>FASHIONISTA</h1>
        <div>
          <Badge>
            <FiSearch size={20} color="#000" />
          </Badge>
          <Badge cartItems={cartItems} onClick={handleToggleVisible}>
            <FiShoppingBag size={20} color="#000" />
          </Badge>

          <Badge>
            <FiMoon size={20} color="#000" />
          </Badge>
        </div>
      </Navbar>
      <Cart visible={visible} />
    </Container>
  );
}
