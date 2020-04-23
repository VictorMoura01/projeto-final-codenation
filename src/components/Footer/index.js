import React from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>Redes Sociais</span>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FiInstagram size={20} color="#ddd" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FiFacebook size={20} color="#ddd" />
        </a>
      </div>
    </Container>
  );
}
