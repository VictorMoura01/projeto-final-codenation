import styled from 'styled-components';

export const Container = styled.main`
  grid-area: main;
  background: #f1f4fb;
  padding: 20px;
`;

export const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
