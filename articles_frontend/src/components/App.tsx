import React from 'react';
import '../styles/App.css';
import { ApolloProvider } from '@apollo/client';
import PostItems  from './PostItems';

const App = ({client}: {client: any}) => {
  return (
    <ApolloProvider client={client}>
      <PostItems />
    </ApolloProvider>
  );
}

export default App;
