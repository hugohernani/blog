import {
  Banner,
  BannerSection,
  BodyContainer,
  Container,
  FooterContainer,
  Header,
  NewsletterFormGroup,
  NewsletterHeader,
  NewsletterMessage,
  NewsletterSection,
  PostsContainer,
  WordCloudContainer,
} from './styles';

import NavigationBottom from '../../components/NavigationBottom';
import NavigationHeader from '../../components/NavigationHeader';
// eslint-disable-next-line
import PostsController from '../../components/PostsController';
import QuotesController from '../../components/QuotesController';
import React from 'react';
import WordCloud from '../../components/WordCloud';

const Homepage: React.FC = () => {
  return (
    <Container>
      <NavigationHeader backgroundColor="#0c59cf" />
      <BannerSection>
        <WordCloudContainer>
          <WordCloud />
        </WordCloudContainer>
        <Banner></Banner>
      </BannerSection>

      <BodyContainer>
        <PostsContainer>
          <QuotesController />

          <PostsController />
        </PostsContainer>

        <FooterContainer>
          <NewsletterSection>
            <NewsletterHeader>Testing</NewsletterHeader>
            <NewsletterMessage>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </NewsletterMessage>

            <NewsletterFormGroup></NewsletterFormGroup>
          </NewsletterSection>

          <NavigationBottom />
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default Homepage;
