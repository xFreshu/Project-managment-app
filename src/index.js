import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { GlobalStyles } from './assets/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
