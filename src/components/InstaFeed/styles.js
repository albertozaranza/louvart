import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  padding: 20px;

  height: ${props => (props.loading ? '754px' : 'auto')};

  h1 {
    color: #1034a6;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

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

  box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.3);

  img {
    height: 100%;
    max-height: 250px;
    width: auto;
  }
`;
