import { ButtonContainer, QuotationItemContainer, Title } from './styles'

import React from 'react'
import ReadMoreButton from '../ReadMoreButton'

interface QuoteProps {
  quote: {
    content: string
    post_id: string
  }
}

const QuotationItem: React.FC<QuoteProps> = ({ quote: { content, post_id } }) => {
  return (
    <QuotationItemContainer>
      <Title>{content}</Title>
      <ButtonContainer>
        <ReadMoreButton href={'/posts/' + post_id} content="Read More" />
      </ButtonContainer>
    </QuotationItemContainer>
  )
}

export default QuotationItem
