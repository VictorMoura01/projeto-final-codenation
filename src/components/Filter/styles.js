import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const FilterHeader = styled.header`
  background: #fff;
  padding: 15px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const FilterWrapper = styled.div`
  background: #f4f4f4;
  padding: 15px;

  input {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0.1);
    outline: none;
  }
`;

export const FilterList = styled.ul`
  list-style: none;
  padding: 10px;
`;

export const FilterItem = styled(Link)`
  display: flex;
  padding: 5px;
  text-decoration: none;
  color: inherit;
`;

export const ProductFigure = styled.figure`
  height: 100px;

  img {
    height: 100%;
  }
`;

export const ProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 5px;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const ProductPrice = styled.span`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  ${({ installments }) =>
    installments &&
    css`
      font-size: 1.3rem;
      color: #a7a7a7;
    `}
`;
