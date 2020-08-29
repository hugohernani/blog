import React from 'react'
import NavigationHeader from '../../components/NavigationHeader'
import PostsController from '../../components/PostsController'
import QuotesController from '../../components/QuotesController'
import { BodyContainer, Container, Header } from './styles'

const Homepage: React.FC = () => (
  <Container>
    <NavigationHeader />
    <Header>Meu Blog</Header>
    <QuotesController />

    <BodyContainer>
      <PostsController />
    </BodyContainer>
  </Container>
)

export default Homepage
