import { PortfolioItemContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { IPortfolioItemPreview } from '../../interfaces';
import PortfolioItemPreview from '../PortfolioItemPreview';

const PortfolioHomeListPreview: React.FC = () => {
  const [portfolioImageArr] = useState<IPortfolioItemPreview[]>([
    {
      url: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      description: 'Portfolio',
      imageSize: '150px',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      description: 'Portfolio',
      imageSize: '150px',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/05/17/04/10/animal-3407787_960_720.png',
      description: 'Portfolio',
      imageSize: '150px',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/07/22/17/16/cat-2529377_960_720.jpg',
      description: 'Portfolio',
      imageSize: '150px',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg',
      description: 'Portfolio',
      imageSize: '150px',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
      description: 'Portfolio',
      imageSize: '150px',
    },
  ]);

  return useMemo(
    () => (
      <React.Fragment>
        {portfolioImageArr.map(({ url, description, imageSize }) => (
          <PortfolioItemContainer key={url}>
            <PortfolioItemPreview url={url} description={description} imageSize={imageSize} />
          </PortfolioItemContainer>
        ))}
      </React.Fragment>
    ),
    [portfolioImageArr],
  );
};

export default PortfolioHomeListPreview;
