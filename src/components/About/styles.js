import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 0;

  color: #fff;
  background-color: #1034a6;
`;

export const GridItem = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  div {
    background-color: #ccc;

    width: 300px;
    height: 150px;
  }
`;
