import {
  BannerSection,
  Container,
  NavigationBottomContainer,
  NavigationHeaderContainer,
  PortfolioListContainer,
  PresentationContainer,
  PresentationInfoContainer,
  ProfileImageContainer,
  SocialLinksContainer,
} from './styles';
import React, { useCallback, useState } from 'react';
import PortfolioNavigationHeader from '../../components/PortfolioNavigationHeader';
import PortfolioNavigationBottom from '../../components/PortfolioNavigationBottom';
import SocialLinks from '../../components/SocialLinks';
import PortfolioHomeListPreview from '../../components/PortfolioHomeListPreview';
import UserPresentationCard from '../../components/UserPresentationCard';
import { ICallOutInfoButton, ISocialLinkConfig, IUserInfo, IUserProfileImage } from '../../interfaces';
import UserPresentationProfileImage from '../../components/UserPresentationProfileImage';

const Homepage: React.FC = () => {
  const [userPresentationInfo] = useState<IUserInfo & ICallOutInfoButton>({
    title: 'Web Developer',
    shortDescription: `
      Hi, I am coder. That's what I do for a living.
      I am a fullstack web developer. Wanna see a short description of my career and things I have done in technology? Then my resume will show you this.
      But wanna see in action what kind of things I built and current projects and technologies I am working on? Then check out my portfolio
      `,
    resumeCallOut: 'Resume',
    portfolioCallOut: 'Portfolio',
    resumeUrl: process.env.PUBLIC_URL + '/hugo-hernani-resume.pdf',
    portfolioUrl: '/portfolio',
  });

  const [userProfileImage] = useState<IUserProfileImage>({
    url: 'me-avatar.svg',
    description: 'Hugo Hernani',
    width: '560px',
    height: '600px',
  });

  const [socialLinkConfig] = useState<ISocialLinkConfig>({
    iconColor: '#000000',
    textColor: '#ffffff',
  });

  const profileImageSizeCb = useCallback(() => {
    const { width, height } = userProfileImage;
    return { width, height };
  }, [userProfileImage]);

  return (
    <Container>
      <NavigationHeaderContainer>
        <PortfolioNavigationHeader />
      </NavigationHeaderContainer>
      <BannerSection>
        <PresentationContainer>
          <PresentationInfoContainer>
            <UserPresentationCard {...userPresentationInfo} />
          </PresentationInfoContainer>
        </PresentationContainer>

        <ProfileImageContainer theme={{ imageSize: profileImageSizeCb() }}>
          <UserPresentationProfileImage {...userProfileImage} />
        </ProfileImageContainer>
        <SocialLinksContainer>
          <SocialLinks {...socialLinkConfig} />
        </SocialLinksContainer>
      </BannerSection>

      <PortfolioListContainer>
        <PortfolioHomeListPreview />
      </PortfolioListContainer>

      <NavigationBottomContainer>
        <PortfolioNavigationBottom />
      </NavigationBottomContainer>
    </Container>
  );
};

export default Homepage;
