import { ContainerList, PortfolioItemContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { IPortfolioItemPreview } from '../../interfaces';
import PortfolioItemPreview from '../PortfolioItemPreview';

const PortfolioListPreview: React.FC = () => {
  const [portfolioImageArr] = useState<IPortfolioItemPreview[]>([
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/05/17/04/10/animal-3407787_960_720.png',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/07/22/17/16/cat-2529377_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
    {
      projectUrl: '/portfolio/ehv',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      shortDescription: 'Portfolio',
      imageSize: '350px',
      dateRange: '12/01/2020 -- 12/13/2020',
      technology: 'Ruby On Rails',
      projectTitle: 'Employee HomeView',
    },
  ]);

  return useMemo(
    () => (
      <ContainerList>
        {portfolioImageArr.map((portfolioAttrs, index) => (
          <PortfolioItemContainer key={index}>
            <PortfolioItemPreview {...portfolioAttrs} />
          </PortfolioItemContainer>
        ))}
      </ContainerList>
    ),
    [portfolioImageArr],
  );
};

export default PortfolioListPreview;
