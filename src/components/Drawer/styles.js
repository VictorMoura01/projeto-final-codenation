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
  overflow-y: scroll;
  overflow-x: visible;
  height: 100%;

  ${({ visible }) =>
    visible &&
    css`
      transform: translateZ(0);
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    `}

  @media screen and (min-width: 1024px) {
    width: 380px;
    right: 0;
  }
`;
