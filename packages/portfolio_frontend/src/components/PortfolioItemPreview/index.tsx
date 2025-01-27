import React, { useMemo } from 'react';
import { IPortfolioItemPreview } from '../../interfaces';
import {
  Container,
  ImageContainer,
  InfoContainer,
  MetaDataContainer,
  MetaDataDate,
  MetaDataTechnology,
  Description,
  Title,
} from './styles';

const PortfolioItemPreview: React.FC<IPortfolioItemPreview> = ({
  imageUrl,
  shortDescription,
  dateRange,
  projectTitle,
  technology,
  imageSize,
}) => {
  return useMemo(
    () => (
      <Container>
        <ImageContainer>
          <img src={imageUrl} alt={shortDescription} width={imageSize} height={imageSize} />
        </ImageContainer>
        <InfoContainer theme={{ imageSize }}>
          <MetaDataContainer>
            <MetaDataTechnology>{technology}</MetaDataTechnology>
            <MetaDataDate>{dateRange}</MetaDataDate>
          </MetaDataContainer>
          <Title>{projectTitle}</Title>
          <Description>{shortDescription}</Description>
        </InfoContainer>
      </Container>
    ),
    [imageUrl, shortDescription, imageSize, technology, dateRange, projectTitle],
  );
};

export default PortfolioItemPreview;
