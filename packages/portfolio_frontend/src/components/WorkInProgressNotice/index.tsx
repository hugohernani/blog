import { Container, Title } from './styles';
import React, { useMemo } from 'react';
const WorkInProgressNotice: React.FC = () => {
  return useMemo(
    () => (
      <Container>
        <Title>Work In Progress</Title>
      </Container>
    ),
    [],
  );
};

export default WorkInProgressNotice;
