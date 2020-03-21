import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EXCHANGES } from '../constants';
import CryptoPage from '../components/CryptoPage';
import { pricesActions, exchangeRateActions } from '../actions';
import '../assets/css/Main.css';

class CryptoPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCurrencies: EXCHANGES,
      total: 0,
    };
  }

  componentDidMount() {
    this.requestAllPrices();
    this.interval = setInterval(() => this.requestAllPrices(), 10 * 60000);
  }

  requestAllPrices = () => {
    const { requestPrices, requestRate } = this.props;
    const { allCurrencies } = this.state;
    Object.values(allCurrencies).forEach(currency => requestPrices(currency.key));
    requestRate();
  }

  calculateTotal = (value = 0, key = null) => {
    const { rate } = this.props;
    const { allCurrencies } = this.state;
    if (key) {
      allCurrencies[key].value = value;
    }
    const currencies = Object.values(allCurrencies);
    const total = currencies.map(currency => currency.value).reduce((accumulator, currency) => accumulator + currency);
    this.setState({ total: total * rate });
  }

  render() {
    const { prices } = this.props;
    const { total, allCurrencies } = this.state;

    return (
        <CryptoPage
            allCurrencies={allCurrencies}
            prices={prices}
            total={total}
            calculateTotal={this.calculateTotal}
        />
    );
  }
}

const mapStateToProps = (state) => ({
  prices: state.prices.prices,
  rate: state.rates.currentRate,
});

const mapDispatchToProps = {
  requestPrices: pricesActions.request,
  requestRate: exchangeRateActions.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoPageContainer);
