import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;

  color: #fff;

  h1 {
    color: #1034a6;
    margin: 40px 0;
  }
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
  width: 300px;

  background-color: #ccc;

  div {
    background-color: rgba(16, 52, 166, 0.6);
    padding: 10px 30px;
  }

  &:nth-child(2n + 1) {
    margin-right: 130px;
  }

  &:nth-child(2n) {
    margin-left: 130px;
  }

  @media (max-width: 767px) {
    &:nth-child(2n + 1) {
      margin-right: 0;
    }

    &:nth-child(2n) {
      margin-left: 0;
    }
  }
`;
