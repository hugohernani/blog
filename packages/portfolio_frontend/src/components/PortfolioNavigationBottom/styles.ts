import styled from 'styled-components';

export const Container = styled.nav`
  min-height: 300px;
  background-color: whitesmoke;
  padding: 0px 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  width: 100vw;

  a,
  a.active {
    color: black;
  }
`;
