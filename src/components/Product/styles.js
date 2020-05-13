import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
  position: relative;
  text-align: center;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #212529;
`;

export const ProductFigure = styled.figure`
  img {
    width: 100%;
    overflow: hidden;
  }
`;

export const ProductName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
`;

export const ProductPrices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductPrice = styled.span`
  font-size: 1.4rem;
  ${({ regular }) =>
    regular &&
    css`
      font-size: 1.2rem;
      color: #a7a7a7;
      text-decoration: line-through;
    `}
`;
