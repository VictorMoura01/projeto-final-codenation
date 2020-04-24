import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #333;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .__product-price {
    font-size: 1.4rem;
  }

  .__product-price--from {
    font-size: 1.2rem;
    color: #a7a7a7;
    text-decoration: line-through;
  }
`;

export const SalesTag = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% - 32px);
  height: 20px;
  width: 32px;
  background-color: #141414;
  color: #fff;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
