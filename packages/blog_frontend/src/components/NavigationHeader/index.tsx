import { Container, LinksContainer, LogoContainer } from './styles'
import { Link, NavLink } from 'react-router-dom'
import React, { useMemo, useState } from 'react'

import { FaWarehouse } from 'react-icons/fa'
import { NavigationTheme } from '../../types'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const defaultStyle: NavigationTheme = {
  backgroundColor: 'transparent',
  padding: '25px',
  navFixed: false,
}

const fixedDefaultStyle: NavigationTheme = {
  padding: '25px',
  backgroundColor: 'grey',
  navFixed: true
}

const NavigationHeader: React.FC<NavigationTheme> = (props) => {
  const [theme, setTheme] = useState<NavigationTheme>({ ...defaultStyle, ...props })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const fixedPosition = currPos.y < prevPos.y;
      if (fixedPosition && !theme.navFixed) { // is AT fixed position but position: fixed not applyed yet
        setTheme({ ...theme, ...props, ...fixedDefaultStyle })
      }else if(theme.navFixed && currPos.y === 0){ // it went back to top position
        setTheme({ ...theme, ...defaultStyle, ...props })
      }
    },
    [theme], // deps
    undefined, // element
    false, // useWindow ?
    200, // deferred value
  )

  return useMemo(
    () => (
      <Container theme={theme}>
        <LogoContainer>
          <Link to="/">
            <FaWarehouse size="50px" />
            <h3>Hugo Hernani</h3>
          </Link>
        </LogoContainer>
        <LinksContainer>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </LinksContainer>
      </Container>
    ),
    [theme],
  )
}

export default NavigationHeader
