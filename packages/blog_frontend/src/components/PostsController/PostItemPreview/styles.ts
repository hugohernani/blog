import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 40px 120px;

  > hr {
    border: none;
    border-top: 1px solid gray;
  }

  &:hover {
    > h3 {
      cursor: default;
      border-top: 2px solid #270ef0e0;
      border-bottom: 2px solid #270ef0e0;
      padding-right: 150px;
      margin-right: -150px;
    }

    div:last-child a {
      background-color: #270ef0e0;
      font-weight: 200;
    }
  }
`;

export const Header = styled.h3`
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 35px;
  padding: 5px 0px 0px 0px;

  background-color: inherit;
  color: inherit;
  display: inline-block;

  border: none;
  transition: border 0.4s, padding-right 0.4s, margin-right 0.4s linear;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 5px 0px;

  span {
    color: gray;

    & ~ span {
      border-left: 1px solid black;
      margin-left: 5px;
      padding-left: 5px;
    }
  }
`;

export const PostTagsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const PostTag = styled.a`
  color: gray;
  background-color: white;

  padding: 2px 5px;
  border: 1px solid black;

  cursor: pointer;

  & ~ & {
    margin-left: 5px;
  }

  &:hover {
    transition: color 0.2s, background-color 0.2s ease-out;

    color: white;
    background-color: gray;
  }
`;

export const PostDate = styled.span``;

export const PostReadTime = styled.span``;

export const ContentSection = styled.section`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 0px;
`;

export const MainContent = styled.p`
  line-height: 1.5;
  text-align: justify;
  font-family: 'Impact, sans-serif';
`;

export const ReadButtonContainer = styled.div`
  display: inline-block;
  margin: 5px 0px 10px 0px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  div > a {
    transition: background-color 0.4s linear;
    padding: 5px 15px;
    background-color: #3d8af7;
    color: white;
  }
`;
