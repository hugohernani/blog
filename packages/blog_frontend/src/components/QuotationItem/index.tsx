import { ButtonContainer, QuotationItemContainer, QuoteContainer, QuoteContent } from './styles';

import React from 'react';
import ReadMoreButton from '../ReadMoreButton';

interface QuoteProps {
  quote: {
    content: string;
    postId: string;
  };
}

const QuotationItem: React.FC<QuoteProps> = ({ quote: { content, postId } }) => {
  return (
    <QuotationItemContainer>
      <QuoteContainer>
        <QuoteContent>{content}</QuoteContent>
      </QuoteContainer>
      <ButtonContainer>
        <ReadMoreButton href={'/posts/' + postId} content="Read More" />
      </ButtonContainer>
    </QuotationItemContainer>
  );
};

export default QuotationItem;
