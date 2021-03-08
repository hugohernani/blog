import { Container, ContentContainer } from './styles';
import React from 'react';
import PortfolioNavigationHeader from '../../components/PortfolioNavigationHeader';
import PortfolioNavigationBottom from '../../components/PortfolioNavigationBottom';
import PortfolioListPreview from 'src/components/PortfolioListPreview';
import WorkInProgressNotice from 'src/components/WorkInProgressNotice';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <PortfolioNavigationHeader />
      <ContentContainer>
        <WorkInProgressNotice />
        <PortfolioListPreview />
      </ContentContainer>
      <PortfolioNavigationBottom />
    </Container>
  );
};

export default Portfolio;
