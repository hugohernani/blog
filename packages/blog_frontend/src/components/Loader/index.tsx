import React, { useMemo } from 'react';

import { Container } from './styles';

const Loader: React.FC = () => {
  return useMemo(
    () => (
      <Container>
        <h1>Loading...</h1>
      </Container>
    ),
    [],
  );
};

export default Loader;
