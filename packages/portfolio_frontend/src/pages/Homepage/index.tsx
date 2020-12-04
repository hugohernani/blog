import {
  BannerSection,
  Container,
  NavigationBottomContainer,
  NavigationHeaderContainer,
  PortfolioListContainer,
  PresentationContainer,
  ProfileImageContainer,
} from './styles';
import React, { useCallback, useState } from 'react';
import PortfolioNavigationHeader from '../../components/PortfolioNavigationHeader';
import PortfolioNavigationBottom from '../../components/PortfolioNavigationBottom';
import SocialLinks from '../../components/SocialLinks';
import PortfolioHomeListPreview from '../../components/PortfolioHomeListPreview';
import UserPresentationCard from '../../components/UserPresentationCard';
import { ICallOutInfoButton, IUserInfo, IUserProfileImage } from '../../interfaces';
import UserPresentationProfileImage from 'src/components/UserPresentationProfileImage';

const Homepage: React.FC = () => {
  const [userProfileImage] = useState<IUserProfileImage>({
    url: 'https://cdn.pixabay.com/photo/2019/10/24/08/33/pet-4573741_960_720.png',
    description: 'Hugo Hernani',
    width: '460px',
    height: '370px',
  });

  const profileImageSizeCb = useCallback(() => {
    const { width, height } = userProfileImage;
    return { width, height };
  }, [userProfileImage]);

  const [userPresentationInfo] = useState<IUserInfo & ICallOutInfoButton>({
    name: 'Hugo Hernani',
    shortDescription: 'Lorem Ipsum',
    callOutLabel: 'Check my portfolio',
    callOutUrl: '/portfolio',
  });

  return (
    <Container>
      <NavigationHeaderContainer>
        <PortfolioNavigationHeader />
      </NavigationHeaderContainer>
      <BannerSection>
        <PresentationContainer>
          <UserPresentationCard {...userPresentationInfo} />
          <SocialLinks />
        </PresentationContainer>

        <ProfileImageContainer theme={{ imageSize: profileImageSizeCb() }}>
          <UserPresentationProfileImage
            url={userProfileImage.url}
            description={userProfileImage.description}
            width={userProfileImage.width}
            height={userProfileImage.height}
          />
        </ProfileImageContainer>
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
