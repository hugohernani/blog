import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  position: relative;

  background: transparent;

  &:hover {
    article {
      background: transparent;
    }

    article *:not(h3) {
      transform: scale(0);
    }

    h3 {
      color: whitesmoke;
      font-weight: bold;
      transform: translateY(40px);

      text-shadow: 0 3px 0 #000, 0 2px 0 #656060;
    }

    > div:first-of-type img {
      transform: scale(1.5);
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;

  img {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
`;

export const InfoContainer = styled.article`
  padding: 15px;

  position: absolute;
  width: ${(props) => props.theme.imageSize};
  bottom: 0px; // TODO
  min-height: 130px;
  background: whitesmoke;
  z-index: 1;

  transition: background 0.4s ease-in-out;
`;

export const MetaDataContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  align-items: center;
  justify-content: space-between;

  margin: 0px 0px 15px 0px;
`;

export const MetaDataTechnology = styled.span`
  background-color: black;
  color: white;
  padding: 5px 10px;

  text-transform: uppercase;
  font-size: 1.5vh;
`;

export const MetaDataDate = styled.span`
  font-size: 14px;
  font-style: oblique;
`;

export const Title = styled.h3`
  color: black;
  transition: all 0.2s linear;
`;

export const Description = styled.p`
  font-family: monospace;

  margin: 10px 0px 0px 0px;
`;
