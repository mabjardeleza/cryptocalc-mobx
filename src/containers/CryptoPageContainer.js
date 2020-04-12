import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import CryptoPage from '../components/CryptoPage';
import '../assets/css/Main.css';

@inject('cryptoPricesStore', 'currencyRatesStore', 'calculatorStore')
@observer
class CryptoPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.requestAllPrices();
    // this.interval = setInterval(() => this.requestAllPrices(), 10 * 60000);
  }

  requestAllPrices = () => {
    Object.values(this.props.calculatorStore.allCurrencies).forEach(currency =>
      this.props.cryptoPricesStore.loadPrice(currency.key),
    );
    this.props.currencyRatesStore.loadRate();
  };

  render() {
    return (
      <CryptoPage
        allCurrencies={this.props.calculatorStore.allCurrencies}
        prices={this.props.cryptoPricesStore.prices}
        total={this.props.calculatorStore.convertedTotal}
        calculateTotal={this.props.calculatorStore.calculateTotal}
      />
    );
  }
}

export default CryptoPageContainer;
