import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: inherit;

  hr {
    overflow: visible;
    padding: 0;
    border: none;
    border-top: 2px solid whitesmoke;
    color: #270ef0e0;
    text-align: center;

    &:after {
      content: 'HH';
      display: inline-block;
      position: relative;
      top: -0.7em;
      font-size: 1em;
      background: inherit;
    }
  }
`;

export const NavigationContainer = styled.section`
  margin: 0px 80px;
  min-height: 100px;

  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;

  > div a {
    transition: all 0.2s ease-out;

    &:hover {
      background-color: gray;
      padding: 10px 20px !important;
    }

    &.active {
      color: inherit;
      border-top: 1px solid black;
      padding: 0px 6px;
      border-bottom: 1px solid black;
      align-self: center;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-flow: column;
    margin: 10px 0px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0px auto 0px 30px;

  > a {
    font-family: 'Roboto', sans-serif;
    margin: 0 20px;
    padding: 10px 15px;
    color: ${(props) => props.theme.contentColor || 'black'};
    display: inline-block;
    font-size: 20px;
    outline: none;
    transition: all 0.2s ease-out;
    margin: 0px 30px

    &:hover {
      background-color: gray;
      /* padding: 10px 20px !important; */
      border: 0px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 0px 10px;
    flex-flow: column nowrap;

    > a {
      font-size: 30px
    }
  }
`;

export const SocialLinksContainer = styled.div`
  margin: 0px 30px;

  @media only screen and (max-width: 600px) {
    margin: 2px 0px;
  }
`;

const footerParapraph = css`
  font-size: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const CopyrightContainer = styled.section`
  margin: 0px 80px;
  min-height: 60px;
  text-align: center;

  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;

  align-items: baseline;
  color: #a7a4a6;

  > p {
    ${footerParapraph}
  }

  @media only screen and (max-width: 600px) {
    flex-flow: column;
    align-items: center;
    margin: 0px;
    margin-bottom: 10px;
  }
`;

export const AuthorContainer = styled.div`
  p {
    ${footerParapraph}
  }

  code {
    ${footerParapraph}
  }
`;
