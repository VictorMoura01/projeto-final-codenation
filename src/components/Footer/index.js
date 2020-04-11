import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>Desenvolvido por</span>
      <div>
        <a
          href="https://www.linkedin.com/in/victor-moura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={20} color="#ddd" />
        </a>
        <a
          href="https://github.com/VictorMoura01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={20} color="#ddd" />
        </a>
      </div>
    </Container>
  );
}
