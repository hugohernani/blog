import {
  BiographyContainer,
  CallOutContainer,
  PortfolioCallOutContainer,
  PresentationShortDescription,
  PresentationTitle,
} from './styles';
import React, { useMemo } from 'react';
import { ICallOutInfoButton, IUserInfo } from '../../interfaces';
import { Link } from 'react-router-dom';

type IUserPresentationCard = IUserInfo & ICallOutInfoButton;

const UserPresentationCard: React.FC<IUserPresentationCard> = ({
  title,
  shortDescription,
  portfolioCallOut,
  portfolioUrl,
  resumeCallOut,
  resumeUrl,
}) => {
  return useMemo(
    () => (
      <BiographyContainer>
        <PresentationTitle>{title}</PresentationTitle>
        <PresentationShortDescription>{shortDescription}</PresentationShortDescription>

        <CallOutContainer>
          <PortfolioCallOutContainer>
            <Link to={resumeUrl}>{resumeCallOut}</Link>
          </PortfolioCallOutContainer>
          <PortfolioCallOutContainer>
            <Link to={portfolioUrl}>{portfolioCallOut}</Link>
          </PortfolioCallOutContainer>
        </CallOutContainer>
      </BiographyContainer>
    ),
    [portfolioCallOut, portfolioUrl, resumeCallOut, resumeUrl, shortDescription, title],
  );
};

export default UserPresentationCard;
