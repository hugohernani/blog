import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 99.5vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 20px -50vw;
  max-height: 550px;
  background: whitesmoke;
  box-shadow: 0px 0px 30px 2px rgb(0 0 0 / 0.2);

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 840px) {
    width: 99.4vw;
  }
`;
