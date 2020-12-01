import { FaInstagram, FaMailBulk, FaGithub } from 'react-icons/fa';

import {
  BannerSection,
  BiographyContainer,
  Container,
  PortfolioCallOutContainer,
  PortfolioItem,
  PortfolioListContainer,
  PresentationContainer,
  PresentationShortDescription,
  PresentationSocialContainer,
  PresentationTitle,
  ProfileImageContainer,
} from './styles';
import React, { useState } from 'react';

type IProfileImage = {
  width: string;
  height: string;
};

const Homepage: React.FC = () => {
  const [profileImageSize] = useState<IProfileImage>({
    width: '460px',
    height: '370px',
  });

  const [portfolioImageSize] = useState<string>('150px');

  return (
    <Container>
      <BannerSection>
        <PresentationContainer>
          <BiographyContainer>
            <PresentationTitle>Hugo Hernani</PresentationTitle>
            <PresentationShortDescription>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </PresentationShortDescription>

            <PortfolioCallOutContainer>
              <a href="google.com">Check my portfolio out</a>
            </PortfolioCallOutContainer>
          </BiographyContainer>
          <PresentationSocialContainer>
            <a href="https://github.com/hugohernani" target="_blank" rel="noopener noreferrer">
              <FaGithub size="25px" color="#092747" />
              <span>hugohernani</span>
            </a>
            <a href="https://instagram.com/hugo.hernani/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="25px" color="#092747" />
              <span>hugo.hernani</span>
            </a>
            <a href="mailto:hhernanni@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaMailBulk size="25px" color="#092747" />
              <span>hhernanni@gmail.com</span>
            </a>
          </PresentationSocialContainer>
        </PresentationContainer>

        <ProfileImageContainer theme={{ imageSize: profileImageSize }}>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/24/08/33/pet-4573741_960_720.png"
            alt="Hugo Hernani"
            width={profileImageSize.width}
            height={profileImageSize.height}
          />
        </ProfileImageContainer>
      </BannerSection>

      <PortfolioListContainer>
        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>

        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>

        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/17/04/10/animal-3407787_960_720.png"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>

        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2017/07/22/17/16/cat-2529377_960_720.jpg"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>

        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>

        <PortfolioItem>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg"
            alt="Portfolio Image"
            width={portfolioImageSize}
            height={portfolioImageSize}
          />
        </PortfolioItem>
      </PortfolioListContainer>
    </Container>
  );
};

export default Homepage;
