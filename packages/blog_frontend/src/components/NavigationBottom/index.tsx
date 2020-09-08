import {
  AuthorContainer,
  Container,
  CopyrightContainer,
  LinksContainer,
  NavigationContainer,
  SocialLinksContainer,
} from './styles';
import React, { useMemo } from 'react';

import LogoView from '../LogoView';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks';

const NavigationBottom: React.FC = () => {
  return useMemo(
    () => (
      <Container>
        <NavigationContainer>
          <LogoView contentColor="#270ef0e0" smallIconSize="30px" />
          <LinksContainer theme={{ contentColor: '#270ef0e0' }}>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLinks contentColor="#270ef0e0" smallIconSize="30px" />
          </SocialLinksContainer>
        </NavigationContainer>
        <hr />
        <CopyrightContainer>
          <p>@ Copyright 2020</p>
          <AuthorContainer>
            <p>Developed by Hugo</p>
            <code>Version 1.0</code>
          </AuthorContainer>
        </CopyrightContainer>
      </Container>
    ),
    [],
  );
};

export default NavigationBottom;
