import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  border: 1px solid #ddd;
  padding: 20px;
  min-width: 260px;
  max-width: 260px;
  background: #fff;

  img {
    width: auto;
    height: 200px;
    overflow: hidden;
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

export const LinkButton = styled(Link)`
  height: 2em;
  width: 6em;
  border: none;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #fff;
  background-color: #141414;
  transition: opacity 0.1s ease-in-out;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;
