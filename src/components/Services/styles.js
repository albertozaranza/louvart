import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  color: #1034a6;

  @media (max-width: 767px) {
    height: auto;

    padding-bottom: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 5px;
  }
`;

export const GridItem = styled.div`
  display: flex;

  img {
    height: 100px;
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;

    img {
      height: 70px;
      margin: 10px 0;
    }
  }
`;
