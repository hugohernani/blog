import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-left: 40px;

  img {
    border-radius: 15%;
    box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1);

    transition: transform 0.4s, box-shadow 0.4s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
