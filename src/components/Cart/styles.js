import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  button {
    background: none;
    border: 0;
    padding: 6px;
    transition: hover 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: bold;
`;

export const CartList = styled.ul`
  list-style: none;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 350px;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-right: 15px;

  border-bottom: 1px solid #eee;

  img {
    height: 100px;
  }

  span {
    color: #666;
    font-weight: bold;
    margin-top: 5px;
    font-size: 14px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #000;
    padding: 2px;
    width: 40px;
    background: #fff;
  }

  .item-container {
    flex: 1;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    strong {
      color: #333;
      display: block;
      text-transform: uppercase;
    }
  }

  .item-controls {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #000;
  color: #fff;
  height: 40px;
`;
