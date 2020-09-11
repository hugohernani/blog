import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  float: right;

  max-width: 600px;
  max-height: 400px;

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
  background-color: #3d8af7;
  min-height: 150px;
  min-width: 400px;

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
  right: 10px;
  top: 3px;
  z-index: 2;

  svg {
    cursor: pointer;
    transform: scale(1);

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }

  svg ~ svg {
    margin-left: 5px;
  }
`;
