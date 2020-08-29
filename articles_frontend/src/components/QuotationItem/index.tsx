import React from 'react'
import ReadMoreButton from '../ReadMoreButton'
import { QuoteContainer, Title } from './styles'

interface QuoteProps {
  quote: {
    content: string
    post_id: string
  }
}

const QuotationItem: React.FC<QuoteProps> = ({ quote: { content, post_id } }) => {
  return (
    <QuoteContainer>
      <Title>{content}</Title>
      <ReadMoreButton href={'/posts/' + post_id} content="Read More" />
    </QuoteContainer>
  )
}

export default QuotationItem
