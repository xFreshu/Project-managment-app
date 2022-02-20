import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { GlobalStyles } from './assets/GlobalStyles';
import AppProvider from './providers/AppProvider';

ReactDOM.render(
  <AppProvider>
    <GlobalStyles />
    <App />
  </AppProvider>,
  document.getElementById('root')
);
