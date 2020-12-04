import {
  BiographyContainer,
  PortfolioCallOutContainer,
  PresentationShortDescription,
  PresentationTitle,
} from './styles';
import React, { useMemo } from 'react';
import { ICallOutInfoButton, IUserInfo } from '../../interfaces';
import { Link } from 'react-router-dom';

type IUserPresentationCard = IUserInfo & ICallOutInfoButton;

const UserPresentationCard: React.FC<IUserPresentationCard> = ({
  name,
  shortDescription,
  callOutUrl,
  callOutLabel,
}) => {
  return useMemo(
    () => (
      <BiographyContainer>
        <PresentationTitle>{name}</PresentationTitle>
        <PresentationShortDescription>{shortDescription}</PresentationShortDescription>

        <PortfolioCallOutContainer>
          <Link to={callOutUrl}>{callOutLabel}</Link>
        </PortfolioCallOutContainer>
      </BiographyContainer>
    ),
    [callOutLabel, callOutUrl, name, shortDescription],
  );
};

export default UserPresentationCard;
