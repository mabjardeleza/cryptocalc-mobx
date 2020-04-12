import { observable, action } from 'mobx';

class CryptoPricesStore {
  @observable prices = {};
  @observable isLoadingPrices = false;
  @observable hasErrorPrices = false;
  @observable pricesErrorMessage = '';

  @action loadPrices(key) {
    this.isLoadingPrices = true;
    const url = `/markets/coinbase-pro/${key}/price`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(
        action(response => {
          const price = response.json();
          this.prices[key] = price.result.price;
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
