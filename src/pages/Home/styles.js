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
  row-gap: 20px;
  column-gap: 10px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
