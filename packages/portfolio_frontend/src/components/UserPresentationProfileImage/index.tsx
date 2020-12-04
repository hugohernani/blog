import React, { useMemo } from 'react';
import { IUserProfileImage } from '../../interfaces';

const UserPresentationProfileImage: React.FC<IUserProfileImage> = ({ url, description, width, height }) => {
  return useMemo(() => <img src={url} alt={description} width={width} height={height} />, [
    description,
    height,
    url,
    width,
  ]);
};

export default UserPresentationProfileImage;
