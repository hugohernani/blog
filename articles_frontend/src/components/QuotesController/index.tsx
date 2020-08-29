import React, { useState, useEffect } from 'react'
import { FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import QuotationItem from '../QuotationItem'

import { Container } from './styles'

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
      {
        content: 'Quotation 2 Lorem Ipsum Lorem Ipsum',
        post_id: 'uuid-sample',
      },
    ]
    setQuotes(_quotes)
  }, [])

  return (
    <Container>
      {quotes.length &&
        quotes.map((quote, index) => (
          <>
            <FaSun />
            <QuotationItem key={index} quote={quote} />
          </>
        ))}
    </Container>
  )
}

export default QuotesController
