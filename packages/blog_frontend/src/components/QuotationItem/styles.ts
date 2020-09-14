import styled from 'styled-components';

export const QuotationItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  min-width: inherit;
  color: #dddddd;
`;

export const QuoteContainer = styled.blockquote`
  text-align: center;

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }

  &:after {
    color: #ccc;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.25em;
    display: inline-block;
    transform: scale(1, -1);
  }
`;

export const QuoteContent = styled.p`
  font-size: 6vh;
  display: inline;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: -25px;
  right: 0px;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;
