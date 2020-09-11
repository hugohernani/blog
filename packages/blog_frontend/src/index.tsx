import { ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Add external domain to be access through blog_frontend in browser
const GRAPHQL_URL = `http://localhost:${process.env.BLOG_API_APP_EXPOSED_PORT || 3001}/graphql`;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(<App client={client} />, document.getElementById('root'));
