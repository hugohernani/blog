import React, { useMemo } from 'react';
import { IPortfolioItemPreview } from '../../interfaces';

const PortfolioItemPreview: React.FC<IPortfolioItemPreview> = ({ url, description, imageSize }) => {
  return useMemo(() => <img src={url} alt={description} width={imageSize} height={imageSize} />, [
    url,
    description,
    imageSize,
  ]);
};

export default PortfolioItemPreview;
