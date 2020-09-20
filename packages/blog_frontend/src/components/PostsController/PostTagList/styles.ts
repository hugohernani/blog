import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

export const PostTag = styled.a`
  flex-basis: 15%;
  color: gray;
  background-color: white;

  padding: 2px 5px;
  margin: 0px 5px 5px 0px;
  min-width: 100px;
  border: 1px solid black;

  text-align: center;
  word-break: break-word;

  cursor: pointer;

  /* Make a content flex */
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    transition: color 0.2s, background-color 0.2s ease-out;

    color: white;
    background-color: gray;
  }
`;
