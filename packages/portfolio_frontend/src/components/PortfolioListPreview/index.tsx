import { ContainerList, PortfolioItemContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { IPortfolioItemPreview } from '../../interfaces';
import ModalProvider from '../../providers/ModalProvider';
import ProjectWrapperViewer from '../ProjectWrapperViewer';
import PortfolioItemPreview from '../PortfolioItemPreview';

const PortfolioListPreview: React.FC = () => {
  const [portfolioImageArr] = useState<IPortfolioItemPreview[]>([
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/05/17/04/10/animal-3407787_960_720.png',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/07/22/17/16/cat-2529377_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
    {
      projectUrl: '/portfolio/project-url',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Project Title',
    },
  ]);

  return useMemo(
    () => (
      <ModalProvider>
        <ContainerList>
          {portfolioImageArr.map((portfolioAttrs, index) => (
            <PortfolioItemContainer key={index}>
              <ProjectWrapperViewer {...portfolioAttrs}>
                <PortfolioItemPreview {...portfolioAttrs} />
              </ProjectWrapperViewer>
            </PortfolioItemContainer>
          ))}
        </ContainerList>
      </ModalProvider>
    ),
    [portfolioImageArr],
  );
};

export default PortfolioListPreview;
