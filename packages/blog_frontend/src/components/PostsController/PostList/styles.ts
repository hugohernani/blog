import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Header = styled.h1`
  font-family: Robotto, sans-serif;
  font-size: 50px;
  text-transform: capitalize;

  display: inline-block;
  margin-top: 85px;
  text-shadow: 3px 3px 3px gray;

  transition: text-shadow 0.4s linear;

  cursor: default;

  &:hover {
    text-shadow: 2px 2px 2px #3d8af7;
  }
`;

export const PostsContainer = styled.div``;

export const LoadMoreContainer = styled.div``;

export const LoadMoreButton = styled.button`
  height: 40px;

  padding: 10px 20px;
  margin: 10px;
  background-color: #3d8af7;
  color: white;

  border: 0px;
  border-radius: 2px;
  transform: scale(1);

  text-transform: uppercase;

  transition: transform 0.2s, background-color 0.4s, font-weight 0.2s linear;
  &:hover {
    transform: scale(1.2);
    background-color: #270ef0e0;
    font-weight: 200;
  }
`;
