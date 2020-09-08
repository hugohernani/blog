import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  flex-flow: column;
`;

export const BannerSection = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0c59cf;
  height: 100vh;
`;

export const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`;

export const Header = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 2px #000;
  font-size: 100px;
  font-family: 'Roboto  ', sans-serif;
  font-weight: bold;
  color: whitesmoke;
  transition: text-shadow 0.2s ease-in-out;

  &:hover {
    text-shadow: 2px 5px 5px #000;
  }
`;

export const BodyContainer = styled.div`
  position: sticky;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-top: 100px;

  /* For testing only */
  min-height: 1200px;
  background-color: #cacaca;
`;

// export const ContentSection = styled.section`
// `

export const PostsContainer = styled.section`
  position: relative;
  top: -50px;
  margin: 0px 100px;
  background-color: white;
  min-height: 800px;

  box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 600px) {
    margin: 0px 20px;
  }
`;

export const FooterContainer = styled.section`
  position: relative;
  background-color: inherit;
  min-height: 400px;
`;

export const NewsletterSection = styled.section`
  padding: 0px 10px;
  background-color: white;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const NewsletterHeader = styled.h1``;
export const NewsletterMessage = styled.p``;
export const NewsletterFormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
`;
