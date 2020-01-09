import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;

  color: #fff;

  h1 {
    font-weight: normal;
    color: #1034a6;
    margin: 40px 0;
  }

  button {
    margin-top: 40px;
    padding: 10px 20px;

    color: #fff;
    background-color: #1034a6;
    border: none;
    border-radius: 5px;

    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);

    transition: all 0.3s;

    &:hover {
      background-color: #0e2c8a;
      transform: translateY(3px);

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 40px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #ddd;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);

  span {
    width: 100%;

    color: #1034a6;

    font-size: 18px;
    text-align: center;

    padding: 20px 30px;
  }

  img {
    height: 250px;
  }
`;
