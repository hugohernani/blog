import { Container } from './styles';
import React, { useMemo } from 'react';
import { FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return useMemo(
    () => (
      <Container>
        <a href="https://github.com/hugohernani" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px" color="#092747" />
          <span>hugohernani</span>
        </a>
        <a href="https://instagram.com/hugo.hernani/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="25px" color="#092747" />
          <span>hugo.hernani</span>
        </a>
        <a href="mailto:hhernanni@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaMailBulk size="25px" color="#092747" />
          <span>hhernanni@gmail.com</span>
        </a>
      </Container>
    ),
    [],
  );
};

export default SocialLinks;
