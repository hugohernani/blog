import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.h1`
  font-family: Robotto, sans-serif;
  font-size: 50px;
  text-transform: capitalize;

  display: inline-block;
  margin-top: 85px;
  left: 50%;
  position: relative;
  text-shadow: 3px 3px 3px gray;

  transform: translateX(-50%);
  transition: text-shadow 0.4s linear;

  cursor: default;

  &:hover {
    text-shadow: 2px 2px 2px #3d8af7;
  }
`;

export const PostsContainer = styled.div``;
