import React, { useState } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import Cart from '../Cart';

import { Container, Content, Badge } from './styles';

export default function Header() {
  const [visible, setVisible] = useState(true);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <Content>
        <h1>Fashionista</h1>
        <Badge cartItems={4} onClick={handleToggleVisible}>
          <FiShoppingBag size={24} color="#000" />
        </Badge>
      </Content>
      <Cart visible={visible} />
    </Container>
  );
}
