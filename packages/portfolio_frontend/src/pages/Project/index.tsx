import {
  Container,
  ContentContainer,
  ImageContainer,
  ProjectContainer,
  MetaDataContainer,
  MetaDataDate,
  MetaDataTechnology,
  ShortDescription,
  Title,
  InfoCardContainer,
  ProjectContentContainer,
} from './styles';
import React, { useMemo, useState } from 'react';
import PortfolioNavigationHeader from '../../components/PortfolioNavigationHeader';
import PortfolioNavigationBottom from '../../components/PortfolioNavigationBottom';
import { IProject } from '../../interfaces';

const Project: React.FC = () => {
  const [project] = useState<IProject>({
    id: 'ehv',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
    title: 'Employee HomeView',
    shortDescription: 'Portfolio',
    body: `
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      `,
    technology: 'Ruby On Rails',
    dateRange: '12/01/2020 -- 12/13/2020',
  });

  return useMemo(
    () => (
      <Container>
        <PortfolioNavigationHeader />
        <ImageContainer></ImageContainer>
        <ContentContainer>
          <ProjectContainer>
            <InfoCardContainer>
              <Title>{project.title}</Title>
              <MetaDataContainer>
                <MetaDataTechnology>{project.technology}</MetaDataTechnology>
                <MetaDataDate>{project.dateRange}</MetaDataDate>
              </MetaDataContainer>
              <ShortDescription>{project.shortDescription}</ShortDescription>
            </InfoCardContainer>
          </ProjectContainer>
          <ProjectContentContainer>{project.body}</ProjectContentContainer>
        </ContentContainer>
        <PortfolioNavigationBottom />
      </Container>
    ),
    [project.body, project.dateRange, project.shortDescription, project.technology, project.title],
  );
};

export default Project;
