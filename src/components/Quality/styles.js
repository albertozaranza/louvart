import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  color: #fff;
  background-color: #1034a6;

  div {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 1200px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const Item = styled.div`
  font-size: 18px;
  font-weight: normal;

  img {
    height: 70px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;
