import styled from 'styled-components';

export const QuotationItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: inherit;
  min-width: inherit;
  color: #dddddd;
`;

export const QuoteContainer = styled.blockquote`
  margin: 35px 10px auto 10px;

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
  display: inline;
`;

export const ButtonContainer = styled.div`
  position: relative;
  top: 15px;
  align-self: flex-end;
  margin-top: auto;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;
