import { NavContainer, Copyright, BaseBottomContainer } from './styles';
import React, { useMemo } from 'react';

const PortfolioNavigationBottom: React.FC = () => {
  return useMemo(
    () => (
      <BaseBottomContainer>
        <NavContainer>
          <Copyright>2020 - Hugo Hernani</Copyright>
        </NavContainer>
      </BaseBottomContainer>
    ),
    [],
  );
};

export default PortfolioNavigationBottom;