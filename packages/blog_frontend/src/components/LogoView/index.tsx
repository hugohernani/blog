import React, { useMemo } from 'react';

import { Container } from './styles';
import { FaWarehouse } from 'react-icons/fa';
import { FontAwesomeOptions } from '../../project-types';
import { Link } from 'react-router-dom';

export interface ThemeProps {
  contentColor?: string;
}

type LogoViewProps = ThemeProps & Partial<FontAwesomeOptions>;

const LogoView: React.FC<LogoViewProps> = ({ smallIconSize, ...theme } = { smallIconSize: '50px' }) => {
  return useMemo(
    () => (
      <Container theme={theme}>
        <Link to="/">
          <FaWarehouse size={smallIconSize} />
          <h3>Hugo Hernani</h3>
        </Link>
      </Container>
    ),
    [theme, smallIconSize],
  );
};

export default LogoView;
