import { Container, LinksContainer } from './styles';
import React, { useMemo, useState } from 'react';

import LogoView from '../LogoView';
import { NavLink } from 'react-router-dom';
import { NavigationTheme } from '../../types';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const defaultStyle: NavigationTheme = {
  backgroundColor: 'transparent',
  padding: '25px 120px',
  scrolling: false,
};

const fixedDefaultStyle: NavigationTheme = {
  padding: '25px 120px',
  backgroundColor: '#270ef0',
  scrolling: true,
};

const NavigationHeader: React.FC<NavigationTheme> = (props) => {
  const [theme, setTheme] = useState<NavigationTheme>({ ...defaultStyle, ...props });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const fixedPosition = currPos.y < prevPos.y;
      if (fixedPosition && !theme.scrolling) {
        // is AT fixed position but position: fixed not applyed yet
        setTheme({ ...theme, ...props, ...fixedDefaultStyle });
      } else if (theme.scrolling && currPos.y === 0) {
        // it went back to top position
        setTheme({ ...theme, ...defaultStyle, ...props });
      }
    },
    [theme], // deps
    undefined, // element
    false, // useWindow ?
    200, // deferred value
  );

  return useMemo(
    () => (
      <Container theme={theme}>
        <LogoView />
        <LinksContainer>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </LinksContainer>
      </Container>
    ),
    [theme],
  );
};

export default NavigationHeader;
