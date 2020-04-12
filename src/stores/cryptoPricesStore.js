import { observable, action } from 'mobx';

class CryptoPricesStore {
  @observable prices = {};
  @observable isLoadingPrices = false;
  @observable hasErrorPrices = false;
  @observable pricesErrorMessage = '';

  @action loadPrice(key) {
    this.isLoadingPrices = true;
    const url = `/markets/coinbase-pro/${key}/price`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(
        action(response => {
          this.prices[key] = response.result.price;
          this.hasErrorPrices = false;
          this.pricesErrorMessage = '';
        }),
      )
      .catch(
        action(error => {
          this.hasErrorPrices = true;
          this.pricesErrorMessage = error.message;
        }),
      )
      .finally(
        action(() => {
          this.isLoadingPrices = false;
        }),
      );
  }
}

export default new CryptoPricesStore();
