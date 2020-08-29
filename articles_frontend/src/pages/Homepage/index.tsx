import React from 'react'

import { Header, Container } from './styles'
import PostItems from '../../components/PostItems'

const Homepage: React.FC = () => (
  <Container>
    <Header>This is the homepage</Header>
    <PostItems />
  </Container>
)

export default Homepage
