import { BaseHeaderContainer, NavContainer } from './styles';
import React, { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const PortfolioNavigationHeader: React.FC = () => {
  const [resumeUrl] = useState<string>(process.env.PUBLIC_URL + '/hugo-hernani-resume.pdf');

  return useMemo(
    () => (
      <BaseHeaderContainer>
        <NavContainer>
          <NavLink to="/">Hugo Hernani</NavLink>
          <Link to={resumeUrl} download target="_blank">
            My Resume
          </Link>
        </NavContainer>
      </BaseHeaderContainer>
    ),
    [resumeUrl],
  );
};

export default PortfolioNavigationHeader;
