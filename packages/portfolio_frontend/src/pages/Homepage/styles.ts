import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const NavigationHeaderContainer = styled.div``;

export const BannerSection = styled.div`
  margin: -5px 100px 0 100px;

  background-color: #eafffa;

  @media (min-width: 900px) {
    display: flex;
    align-items: stretch;
    flex-flow: row;
    justify-content: space-evenly;
  }

  section {
    flex-basis: 49%;
  }
`;

export const PresentationContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  margin: 20px 0px 5px 0px;
`;

export const ProfileImageContainer = styled.section`
  display: flex;
  max-width: ${(props) => props.theme.imageSize.width};

  img {
    margin: auto;
  }
`;

export const PortfolioListContainer = styled.ul`
  display: block;
  list-style: none;
  background-color: #41c0dc;

  display: flex;
  align-self: stretch;
  justify-content: space-between;

  margin-top: -5px;
  padding: 40px 70px;
  z-index: -1;
`;

export const NavigationBottomContainer = styled.div``;
