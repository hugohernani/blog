import { ApolloClient, InMemoryCache } from '@apollo/client'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

const GRAPHQL_URL =`http://blog_api:${process.env.BLOG_API_APP_EXPOSED_PORT || 3001}/graphql`;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>,
  document.getElementById('root'),
)
