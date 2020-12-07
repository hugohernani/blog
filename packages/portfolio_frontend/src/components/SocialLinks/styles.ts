import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: start;

  a {
    color: ${(props) => props.theme.textColor || 'black'};
    display: flex;
    align-items: center;

    & ~ a {
      margin-left: 30px;
    }

    span {
      padding-left: 5px;
    }
  }
`;
