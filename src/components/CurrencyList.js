import React from 'react';
import Props from 'prop-types';
import { observer } from 'mobx-react';

import Currency from './Currency';

const CurrencyList = observer(({ allCurrencies, prices, calculateTotal }) => (
  <>
    {Object.values(allCurrencies).map(exchange => (
      <Currency
        key={exchange.key}
        exchange={exchange}
        currencyExchangeValue={prices[exchange.key] ? prices[exchange.key] : 0}
        calculateTotal={calculateTotal}
      />
    ))}
  </>
));

CurrencyList.propTypes = {
  allCurrencies: Props.shape({}),
  calculateTotal: Props.func,
  prices: Props.shape({}),
};

CurrencyList.defaultTypes = {
  allCurrencies: {},
  calculateTotal: () => {},
  currencyValues: {},
};

export default CurrencyList;
