import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;

  color: #1034a6;

  h1 {
    margin-bottom: 20px;
    text-align: center;
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
