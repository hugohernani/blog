import React from 'react';
import '../styles/App.css';
import { ApolloProvider } from '@apollo/client';
import PostItems  from './PostItems';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../routes';

const App = ({client}: {client: any}) => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
