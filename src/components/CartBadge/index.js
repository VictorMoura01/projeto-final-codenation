import React from 'react';

import {
  FiShoppingBag,
  FiArrowLeft,
  FiPlus,
  FiMinus,
  FiTrash,
} from 'react-icons/fi';

import { Container, Badge } from './styles';

export default function CartBadge() {
  return (
    <Container>
      <Badge cartItems={4}>
        <FiShoppingBag size={24} color="#000" />
      </Badge>
    </Container>
  );
}
