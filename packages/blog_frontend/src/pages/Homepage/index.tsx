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
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import NavigationBottom from '../../components/NavigationBottom';
import NavigationHeader from '../../components/NavigationHeader';
// eslint-disable-next-line
import PostsController from '../../components/PostsController';
import QuotesController from '../../components/QuotesController';
import WordCloud from '../../components/WordCloud';
import { useLocation } from 'react-router-dom';

type SectionRef<T> = Record<string, React.RefObject<T | undefined>>;

const Homepage: React.FC = () => {
  const { hash } = useLocation();
  const articlesContent = useRef<HTMLDivElement>(null);
  const [sections] = useState<SectionRef<HTMLDivElement>>(() => ({
    '#articles': articlesContent,
  }));

  const validateHash = useCallback((): boolean => {
    const availableHashSections = ['#articles'];
    if (hash !== '' && availableHashSections.indexOf(hash) !== -1) {
      return true;
    } else {
      return false;
    }
  }, [hash]);

  useLayoutEffect(() => {
    if (validateHash()) {
      const refElement = sections[hash];
      refElement.current &&
        refElement.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }
  });

  return (
    <Container>
      <NavigationHeader backgroundColor="#0c59cf" jumpArrowOptions={{ goTo: '#articles' }} />
      <BannerSection>
        <WordCloudContainer>
          <WordCloud />
        </WordCloudContainer>
        <Banner></Banner>
      </BannerSection>

      <BodyContainer id="articles" ref={articlesContent}>
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
