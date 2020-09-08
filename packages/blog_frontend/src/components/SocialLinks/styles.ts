import styled from 'styled-components';

export const Container = styled.div`
  background-color: inherit;

  display: flex;
  align-items: center;
  justify-content: space-round;

  > a {
    margin: 0px 15px;
    transition: all 0.2s ease-out;
    color: ${(props) => props.theme.contentColor || 'white'};

    &:hover {
      background-color: gray;
      padding: 10px 20px !important;
    }
  }
`;
