import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import Cart from '../Cart';

import { Container, Navbar, NavLogo, Badge } from './styles';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.length);
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Navbar>
        <NavLogo to="/">FASHIONISTA</NavLogo>
        <div>
          <Badge>
            <FiSearch size={20} color="#000" />
          </Badge>
          <Badge cartItems={cartItems} onClick={() => setVisible(!visible)}>
            <FiShoppingBag size={20} color="#000" />
          </Badge>
        </div>
      </Navbar>
      <Cart visible handleBackClick={() => setVisible(!visible)} />
    </Container>
  );
}
