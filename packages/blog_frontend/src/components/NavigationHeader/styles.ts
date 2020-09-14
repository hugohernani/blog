import styled from 'styled-components';

export const Container = styled.nav`
  min-height: 40px;
  background-color: ${(props) => props.theme.backgroundColor + 'e0'};
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
  opacity: ${(props) => props.theme.opacity};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  position: fixed;
  width: 100vw;
  z-index: 999;

  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }

  > div a:not([href*='#']) {
    transition: all 0.2s ease-out;

    &:hover {
      background-color: #3d8af7ab;
      padding: 10px 20px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-flow: column nowrap;
    font-size: 30px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  > a {
    font-family: 'Roboto', sans-serif;
    margin: 0 20px;
    padding: 10px 15px;
    color: white;
    display: inline-block;
    font-size: 25px;
    outline: none;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: #3d8af7ab;
      padding: 10px 20px !important;
      border: 0px !important;
    }

    &.active {
      border-top: 1px solid black;
      padding: 0px 6px;
      border-bottom: 1px solid black;
      align-self: center;
    }

    &:last-of-type {
      margin-right: 0px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 40px;
      margin: 2px 0px;
      padding: 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-flow: column;
    text-align: center;
  }
`;

export const MoveDownContainer = styled.div`
  display: block;
  position: fixed;
  left: 50%;
  right: 50%;
  bottom: -10px;
  opacity: 0.85;

  animation: updown 1s linear infinite alternate;

  @keyframes updown {
  0%, 100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 20px);
  }

  80% {
    transform: translate(0, -20px);
  }
`;
