import styled from 'styled-components';

export const Container = styled.div``;

export const ContentContainer = styled.div`
  background: transparent;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;

  height: 100vh;

  background: url('https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProjectContainer = styled.div`
  position: absolute;
  min-height: 150px;
  margin: 0px 200px;
  bottom: -100px;

  display: flex;
  flex-flow: column;
`;

export const InfoCardContainer = styled.aside`
  display: flex;
  flex-flow: column;
  justify-content: center;

  background-color: white;

  max-width: 400px;
  padding: 20px 35px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const MetaDataContainer = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const MetaDataTechnology = styled.span`
  text-transform: uppercase;

  background-color: black;
  color: white;
  font-size: 1.5vh;

  padding: 3px 5px;
  margin-right: 10px;
`;

export const MetaDataDate = styled.span`
  font-size: 10px;
  font-style: oblique;
  color: darkgray;
  font-weight: bold;
`;

export const Title = styled.h1`
  margin: 0px 0px 25px 0px;
`;

export const ShortDescription = styled.div``;

export const ProjectContentContainer = styled.div`
  background-color: white;
  margin: 34px 100px 10px;
  padding: 50px 20px;
  border-radius: 15px;
  min-height: 500px;
  box-shadow: 1px 10px 101px -10px rgba(0, 0, 0, 0.75);

  text-align: justify;
`;
