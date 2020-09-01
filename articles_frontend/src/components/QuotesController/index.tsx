import { Container, QuoteContainer } from './styles'
import React, { useEffect, useState } from 'react'

import { FaSun } from 'react-icons/fa'
import QuotationItem from '../QuotationItem'

interface Quote {
  content: string
  post_id: string
}

const QuotesController: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    const _quotes = [
      {
        content: 'Quotation Lorem Ipsum Lorem Ipsum',
        post_id: 'uuid-sample',
      },
    ]
    setQuotes(_quotes)
  }, [])

  return (
    <Container>
      {quotes.length &&
        quotes.map((quote) => (
          <QuoteContainer key={quote.post_id}>
            <FaSun size="150px" />
            <QuotationItem quote={quote} />
          </QuoteContainer>
        ))}
    </Container>
  )
}

export default QuotesController
