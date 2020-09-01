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
} from './styles'

import NavigationHeader from '../../components/NavigationHeader'
// eslint-disable-next-line
import PostsController from '../../components/PostsController'
import QuotesController from '../../components/QuotesController'
import React from 'react'

const Homepage: React.FC = () => {
  return (
    <Container>
      <BannerSection>
        <NavigationHeader backgroundColor="#0c59cf" />
        <Banner>
          <Header>Meu Blog</Header>
        </Banner>
      </BannerSection>

      <BodyContainer>
        <QuotesController />

        <PostsContainer>
          <PostsController />
        </PostsContainer>
      </BodyContainer>
      <FooterContainer>
        <NewsletterSection>
          <NewsletterHeader>Testing</NewsletterHeader>
          <NewsletterMessage>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </NewsletterMessage>

          <NewsletterFormGroup>

          </NewsletterFormGroup>
        </NewsletterSection>
      </FooterContainer>
    </Container>
  )
}

export default Homepage
