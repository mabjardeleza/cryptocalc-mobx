import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'mobx-react/batchingForReactDom';

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
