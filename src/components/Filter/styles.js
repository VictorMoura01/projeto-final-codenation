import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  background: #f9f9f9;
  top: 0;
  min-height: 100vh;
  position: fixed;
  transition: transform 0.3s ease-out;
  transform: translate3d(100%, 0, 0);
  width: 100%;
  z-index: 20;

  ${({ visible }) =>
    visible &&
    css`
      transform: translateZ(0);
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      }
    `}

  &::before {
    background-color: red;
  }

  @media screen and (min-width: 1024px) {
    width: 375px;
    right: 0;
  }
`;

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

export const FilterItem = styled.li`
  display: flex;
  padding: 5px;
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
