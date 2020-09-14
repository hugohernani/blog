import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 40px 120px;

  > hr {
    border: none;
    border-top: 1px solid gray;
  }
`;

export const Header = styled.h3`
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 35px;
  padding: 5px 0px 0px 0px;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

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
  margin-top: 15px;
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

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  div > a {
    padding: 5px 10px;
    background-color: #3d8af7;
    color: white;
  }
`;
