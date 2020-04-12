import { observable, action, computed } from 'mobx';
import currencyRateStore from './currencyRatesStore';
import { EXCHANGES } from '../constants';

class CalculatorStore {
  @observable allCurrencies = EXCHANGES;

  @action.bound calculateTotal(value = 0, key = null) {
    if (key) {
      this.allCurrencies[key].value = value;
    }
  }

  @computed get convertedTotal() {
    const { rate } = currencyRateStore;
    const currencies = Object.values(this.allCurrencies);
    const total = currencies
      .map(currency => currency.value)
      .reduce((accumulator, currency) => accumulator + currency);
    return (total * rate).toFixed(2);
  }
}

export default new CalculatorStore();
