import styled from 'styled-components';

export const Container = styled.div``;

export const Blockquote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: '\201C''\201D''\2018''\2019';

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  p {
    display: inline;
  }
`;
