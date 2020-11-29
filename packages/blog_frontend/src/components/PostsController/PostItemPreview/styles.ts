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
  overflow: hidden;

  &:hover {
    h3 {
      border-top: 2px solid #270ef0e0;
      border-bottom: 2px solid #270ef0e0;
    }

    div:last-child > a {
      background-color: #270ef0e0;
      font-weight: 200;
    }

    img {
      box-shadow: 0px 10px 49px 5px #270ef0e0;
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

export const ContentSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: self-start;
  height: 185px;
  justify-content: space-between;

  margin-top: 10px;
  padding-top: 10px;
`;

export const MainContent = styled.p`
  line-height: 1.5;
  text-align: justify;
  font-family: 'Impact, sans-serif';
`;

export const ReadButtonContainer = styled.div`
  font-size: 20px;

  display: inline-block;
  margin-top: 5px;

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
