import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

interface LinkProps {
  href: string
  content: string
}

const ReadMoreButton: React.FC<LinkProps> = ({ href, content }) => {
  return (
    <Container>
      <Link to={href}>{content}</Link>
    </Container>
  )
}

export default ReadMoreButton
