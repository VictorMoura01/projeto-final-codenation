import styled, { css } from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  border: 1px solid #000;
  padding: 20px;
  margin: 20px auto;
  min-width: 260px;
  max-width: 260px;

  img {
    width: auto;
    height: 200px;
  }

  strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
    text-transform: uppercase;
  }

  span {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin: 5px 0;

    strike {
      font-size: 14px;
      color: #333;
      font-weight: normal;
    }
  }

  > button {
    height: 3em;
    width: 8em;
    border: none;
    border: 1px solid #ddd;
    color: #fff;
    background-color: #141414;
    transition: opacity 0.1s ease-in-out;
    font-weight: bold;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: #eee;
      color: #8a8986;
      border: none;
      pointer-events: none;
      cursor: not-allowed;
    }
  }

  .product-sale {
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
