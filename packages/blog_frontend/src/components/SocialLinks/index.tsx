import { FaInstagram, FaMailBulk, FaGithub } from 'react-icons/fa';
import React, { useMemo } from 'react';

import { Container } from './styles';
import { FontAwesomeOptions } from '../../project-types';

export interface ThemeProps {
  contentColor?: string;
}

type SocialLinksProps = ThemeProps & Partial<FontAwesomeOptions>;

const SocialLinks: React.FC<SocialLinksProps> = ({ smallIconSize, ...theme } = { smallIconSize: '50px' }) => {
  return useMemo(
    () => (
      <Container theme={theme}>
        <a href="https://github.com/hugohernani" target="_blank" rel="noopener noreferrer">
          <FaGithub size={smallIconSize} />
        </a>
        <a href="https://www.instagram.com/hugo.hernani/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={smallIconSize} />
        </a>
        <a href="mailto:hhernanni@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaMailBulk size={smallIconSize}></FaMailBulk>
        </a>
      </Container>
    ),
    [smallIconSize, theme],
  );
};

export default SocialLinks;
