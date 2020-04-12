import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';
import getStore from './getStore';
import cryptoPricesStore from './stores/cryptoPricesStore';
import currencyRatesStore from './stores/currencyRatesStore';
import calculatorStore from './stores/calculatorStore';
import App from './App';

const stores = {
  cryptoPricesStore,
  currencyRatesStore,
  calculatorStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
