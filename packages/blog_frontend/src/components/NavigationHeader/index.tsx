import { Container, LinksContainer, MoveDownContainer } from './styles';
import { Link, NavLink } from 'react-router-dom';
import React, { useMemo, useState } from 'react';

import { FaAngleDoubleDown } from 'react-icons/fa';
import LogoView from '../LogoView';
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
        setTheme((prevTheme) => ({
          ...prevTheme,
          ...fixedDefaultStyle,
        }));
      } else if (theme.scrolling && currPos.y === 0) {
        setTheme((prevTheme) => ({
          ...prevTheme,
          ...defaultStyle,
        }));
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
        {theme.jumpArrowOptions && !theme.scrolling && (
          <MoveDownContainer>
            <Link to={{ pathname: '/', hash: theme.jumpArrowOptions.goTo }}>
              <FaAngleDoubleDown size="80px" color="white" />
            </Link>
          </MoveDownContainer>
        )}
      </Container>
    ),
    [theme],
  );
};

export default NavigationHeader;
