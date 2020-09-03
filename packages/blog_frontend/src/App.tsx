import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import React from 'react'
import Routes from './routes'

const App = ({ client }: { client: any }) => (
  <React.Fragment>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
    <GlobalStyle />
  </ React.Fragment>
)

export default App
