import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  projectUrl,
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
        <Link to={projectUrl}>
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
        </Link>{' '}
      </Container>
    ),
    [projectUrl, imageUrl, shortDescription, imageSize, technology, dateRange, projectTitle],
  );
};

export default PortfolioItemPreview;
