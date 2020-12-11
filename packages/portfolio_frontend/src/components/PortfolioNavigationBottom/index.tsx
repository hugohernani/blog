import { Container, Copyright } from './styles';
import React, { useMemo } from 'react';

const PortfolioNavigationBottom: React.FC = () => {
  return useMemo(
    () => (
      <Container>
        <Copyright>2020 - Hugo Hernani</Copyright>
      </Container>
    ),
    [],
  );
};

export default PortfolioNavigationBottom;
