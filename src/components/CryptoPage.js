import React from 'react';
import Props from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Currency from './Currency';

const CryptoPage = ({
  allCurrencies,
  prices,
  total,
  calculateTotal,
}) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
    {Object.values(allCurrencies).map(exchange => (
      <Currency
        key={exchange.key}
        exchange={exchange}
        currencyExchangeValue={prices[exchange.key] ? prices[exchange.key] : 0}
        calculateTotal={calculateTotal}
      />
    ))}
    <Typography variant="h6" color="inherit">
      Total: {total} AUD
    </Typography>
  </div>
);

CryptoPage.propTypes = {
  allCurrencies: Props.shape({}),
  calculateTotal: Props.func,
  prices: Props.shape({}),
  total: Props.number,
};

CryptoPage.defaultTypes = {
  allCurrencies: {},
  calculateTotal: () => {},
  currencyValues: {},
  total: 0,
};

export default CryptoPage;
