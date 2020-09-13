import { Container } from './styles';
import React from 'react';

interface ErrorProps {
  message: string;
}

interface ApolloErrorProps {
  error: ErrorProps;
}

const ApolloError: React.FC<ApolloErrorProps> = ({ error: { message } }) => {
  return (
    <Container>
      <h2 text-align="center">Error ${message}</h2>
    </Container>
  );
};

export default ApolloError;
