import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { GlobalStyles } from './assets/GlobalStyles';
import { Provider } from 'react-redux';
import store from './app/store';
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);
