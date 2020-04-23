import styled from 'styled-components';

export const Container = styled.main`
  grid-area: main;
  padding: 20px;
  margin: 0 auto;
`;

export const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
