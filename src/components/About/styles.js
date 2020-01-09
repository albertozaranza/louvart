import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  color: #fff;
  background-color: #1034a6;
`;

export const GridItem = styled.div`
  text-align: justify;

  h1 {
    font-weight: normal;
    margin-bottom: 10px;
  }

  div {
    background-color: #ccc;

    width: 300px;
    height: 150px;

    @media (max-width: 320px) {
      width: 250px;
      height: 125px;
    }
  }
`;
