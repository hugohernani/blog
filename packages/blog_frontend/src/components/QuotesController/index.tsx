import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, QuoteContainer, QuoteControlContainer } from './styles';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import React, { useCallback, useMemo, useState } from 'react';

import QuotationItem from '../QuotationItem';

interface Quote {
  content: string;
  postId: string;
}

interface CurrentQuoteSettings {
  position: number;
  moveSide: string;
}

const QuotesController: React.FC = () => {
  const [currentQuoteSettings, setCurrentQuoteSettings] = useState<CurrentQuoteSettings>({
    position: 0,
    moveSide: 'right',
  });
  const [quotes] = useState<Quote[]>(() => {
    const _quotes = [
      {
        content: 'Quotation Lorem Ipsum Lorem Ipsum',
        postId: 'uuid-sample',
      },
      {
        content: 'Quotation Lorem Ipsum Lorem Ipsum 2',
        postId: 'uuid-sample-2',
      },
    ];
    return _quotes;
  });

  const updatePosition = useCallback(
    (prevPosition: number, moveSide: string, calcFn: (pos: number) => number) => {
      const position = Math.abs(calcFn(prevPosition) % quotes.length);
      setCurrentQuoteSettings((settings) => ({ ...settings, ...{ moveSide, position } }));
    },
    [quotes.length],
  );

  const nextQuotePosition = useCallback(() => {
    updatePosition(currentQuoteSettings.position, 'right', (pos) => pos + 1);
  }, [currentQuoteSettings.position, updatePosition]);

  const prevQuotePosition = useCallback(() => {
    updatePosition(currentQuoteSettings.position, 'left', (pos) => pos - 1);
  }, [currentQuoteSettings.position, updatePosition]);

  return useMemo(
    () => (
      <Container>
        <QuoteControlContainer>
          <FaRegArrowAltCircleLeft size="30px" color="white" onClick={prevQuotePosition} />
          <FaRegArrowAltCircleRight size="30px" color="white" onClick={nextQuotePosition} />
        </QuoteControlContainer>
        <TransitionGroup className="quote-container">
          <CSSTransition
            key={quotes[currentQuoteSettings.position].postId}
            timeout={200}
            classNames={{
              enter: `quote-item-enter-${currentQuoteSettings.moveSide}`,
              enterActive: 'quote-item-enter-active',
              exit: 'quote-item-exit',
              exitActive: 'quote-item-exit-active',
            }}
          >
            <QuoteContainer key={currentQuoteSettings.position}>
              <QuotationItem quote={quotes[currentQuoteSettings.position]} />
            </QuoteContainer>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    ),
    [currentQuoteSettings, prevQuotePosition, nextQuotePosition, quotes],
  );
};

export default QuotesController;
