import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const BannerSection = styled.div`
  margin: 50px 100px 0 100px;

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

export const BiographyContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const PresentationTitle = styled.h1`
  margin-bottom: 20px;
`;

export const PresentationShortDescription = styled.div`
  line-height: 1.65;
  margin-bottom: 20px;
`;

export const PortfolioCallOutContainer = styled.div`
  text-transform: uppercase;

  background-color: #89d8eb;
  padding: 10px 20px;

  border: 1px thin darkblue;
  border-radius: 10px;

  margin: 10px 0px;

  a {
    color: black;
  }
`;

export const PresentationSocialContainer = styled.div`
  display: flex;
  justify-content: start;

  a {
    color: black;
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

  margin-top: 10px;
  padding: 40px 70px;
`;

export const PortfolioItem = styled.li`
  display: block;

  margin: 0px auto;
`;
