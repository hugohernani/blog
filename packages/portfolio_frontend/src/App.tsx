import React from 'react';
import GlobalStyle from './styles';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Routes from './routes';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </ React.Fragment>
  );
}

export default App;
