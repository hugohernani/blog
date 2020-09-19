import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-left: 2px;
  margin-bottom: 20px;

  max-width: 600px;
  max-height: 400px;

  top: -130px;
  right: 0px;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #3d8af7;
  height: 180px;
  min-width: 600px;
  max-width: 800px;

  box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);

  &.quote-item-enter-right {
    transform: translateX(150%);
  }
  &.quote-item-enter-left {
    transform: translateX(-150%);
  }
  &.quote-item-enter-active {
    transform: translateX(0%);
    transition: all 0.25s ease-out;
  }
  &.quote-item-exit {
    display: flex;
  }
  &.quote-item-exit-active {
    display: none;
    transition: all 0.2s ease-in;
  }

  > div {
  }
`;

export const QuoteControlContainer = styled.div`
  position: absolute;
  right: 0px;
  top: -25px;
  z-index: 2;

  svg {
    background-color: #3d8af7;
    border-radius: 100%;
    cursor: pointer;
    transform: scale(1);

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }

  svg ~ svg {
    margin-left: 2px;
  }
`;
