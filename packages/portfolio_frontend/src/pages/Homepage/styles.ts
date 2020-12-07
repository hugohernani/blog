import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const NavigationHeaderContainer = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

export const BannerSection = styled.div`
  background-color: transparent;

  @media (min-width: 900px) {
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    justify-content: space-evenly;

    margin: -10px 100px 10px 100px;
    min-height: 100vh;

    section {
      flex-basis: 46%;
    }
  }
`;

export const SocialLinksContainer = styled.div`
  align-self: flex-start;
`;

export const PresentationContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;

  margin: 20px 0px 5px 0px;
`;

export const PresentationInfoContainer = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const ProfileImageContainer = styled.section`
  display: flex;
  max-width: fit-content;

  img {
    margin: 0px 0px auto 0px;
  }
`;

export const PortfolioListContainer = styled.ul`
  display: block;
  list-style: none;
  background-color: #41c0dc;

  display: flex;
  align-self: stretch;
  justify-content: space-between;

  padding: 40px 70px;
  z-index: -1;
`;

export const NavigationBottomContainer = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
`;
