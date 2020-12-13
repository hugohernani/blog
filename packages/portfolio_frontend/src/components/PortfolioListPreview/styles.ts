import styled from 'styled-components';

export const ContainerList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  margin: 25px 0px;

  @media (min-width: 900px) {
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    justify-content: space-evenly;

    min-height: 100vh;
  }
`;

export const PortfolioItemContainer = styled.li`
  display: inline-block;

  margin: 10px 0px;
  background: #48acc2;
`;
