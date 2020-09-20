import styled from 'styled-components';

export const Container = styled.div`
  > hr {
    margin: 0px 80px;
    border: none;
    border-top: 1px solid gray;
  }
`;

export const PostContainer = styled.div`
  display: block;
  background-color: whitesmoke;
  margin: 40px 100px 40px 120px;
  padding: 20px;

  &:hover {
    > h3 {
      border-top: 2px solid #270ef0e0;
      border-bottom: 2px solid #270ef0e0;
    }

    div:last-child > a {
      background-color: #270ef0e0;
      font-weight: 200;
    }

    img {
      box-shadow: 0px 10px 29px 0px #270ef0e0;
    }
  }
`;

export const Header = styled.h3`
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 35px;
  padding: 5px 0px 0px 0px;

  color: inherit;
  display: inline-block;
  cursor: default;

  border-top: none;
  border-bottom: none;
  transition: border-top 0.1s, border-bottom 0.1s linear;
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContentContainer = styled.div`
  flex: 3;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 40px;
  margin-top: 25px;

  img {
    border-radius: 15%;
    box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1);

    transition: transform 0.4s, box-shadow 0.4s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
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
  font-size: 20px;

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
