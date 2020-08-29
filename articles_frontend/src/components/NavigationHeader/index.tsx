import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, LinksContainer } from './styles'

const NavigationHeader: React.FC = () => {
  return (
    <Container>
      <FaHome />
      <LinksContainer>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </LinksContainer>
    </Container>
  )
}

export default NavigationHeader
