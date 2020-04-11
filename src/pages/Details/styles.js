import styled, { css } from 'styled-components';

export const Main = styled.main`
  grid-area: main;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    height: 280px;
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
