import { observable, action } from 'mobx';

class CurrencyRatesStore {
  @observable rate = 0;
  @observable isLoadingRate = false;
  @observable hasErrorRate = false;
  @observable rateErrorMessage = '';

  @action loadRate() {
    this.isLoadingRate = true;
    const url = `https://openexchangerates.org/api/latest.json?app_id=${process.env.REACT_APP_OPENEXCHANGE_ID}&symbols=AUD`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(
        action(response => {
          this.rate = response.rates.AUD;
          this.hasErrorRate = false;
          this.rateErrorMessage = '';
        }),
      )
      .catch(
        action(error => {
          this.hasErrorRate = true;
          this.rateErrorMessage = error.message;
        }),
      )
      .finally(
        action(() => {
          this.isLoadingRate = false;
        }),
      );
  }
}

export default new CurrencyRatesStore();
