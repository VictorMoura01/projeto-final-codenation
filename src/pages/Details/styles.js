import styled, { css } from 'styled-components';

export const Main = styled.main`
  grid-area: main;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  img {
    width: 280px;
    height: 280px;
  }

  strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin: 15px 0;
    text-transform: uppercase;
  }

  span {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin: 10px 0;

    strike {
      font-size: 14px;
      color: #333;
      font-weight: normal;
    }
  }
`;

export const SizeButton = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  text-transform: uppercase;
  transition: border 0.1s ease-in-out;
  border: 1px solid #ddd;

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid #000;
    `}

  & + button {
    margin-left: 5px;
  }

  &:hover {
    border: 1px solid #000;
  }
`;

export const ProductImagesWrapper = styled.div``;

export const ProductSummaryWrapper = styled.div``;
