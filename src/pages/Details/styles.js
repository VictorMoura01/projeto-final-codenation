import styled, { css } from 'styled-components';

export const Container = styled.main`
  grid-area: main;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const ProductSummary = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
    align-self: flex-start;
  }
`;

export const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 600;

  ${({ regular }) =>
    regular &&
    css`
      color: #a7a7a7;
      margin-right: 1rem;
      font-size: 1.4rem;
      text-decoration: line-through;
    `}

  ${({ installment }) =>
    installment &&
    css`
      color: #a7a7a7;
      margin-left: 1rem;
      font-size: 1.4rem;
    `}
`;

export const ProductSizes = styled.div`
  margin: 1.4rem 0;
`;

export const SizeText = styled.p`
  color: #a7a7a7;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const WarningText = styled.p`
  font-size: 1.2rem;
  color: red;
  font-weight: 600;
  margin-bottom: 5px;
  display: none;
`;

export const SizeButton = styled.button`
  width: 40px;
  height: 40px;
  font-weight: 600;
  background: transparent;
  border-radius: 50%;
  text-transform: uppercase;
  transition: border 0.1s ease-in-out;
  border: 1px solid #ddd;

  & + & {
    margin-left: 5px;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid #000;
    `}
`;

export const AddButton = styled.button`
  height: 3em;
  color: #fff;
  background: linear-gradient(90deg, #212529 0%, #000 100%);
  transition: all 0.1s ease-in-out;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(90deg, #2f343a 0%, rgb(20, 20, 20) 100%);
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
