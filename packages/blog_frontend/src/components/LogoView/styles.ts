import styled from 'styled-components';

export const Container = styled.div`
  a {
    padding: 5px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-items: center;

    h3,
    svg {
      color: ${(props) => props.theme.contentColor || 'white'};
    }

    h3 {
      margin-left: 10px;
    }
  }
`;
