import { observable, action } from 'mobx';

class CurrencyRatesStore {
  @observable rate = 0;
  @observable isLoadingRate = false;
  @observable hasErrorRate = false;
  @observable rateErrorMessage = '';

  @action loadRate() {
    this.isLoadingRate = true;
    const url = `https://openexchangerates.org/api/latest.json?app_id=9d13fcd70a6a48b58ae9d823cccd7119&symbols=AUD`;
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(
        action(response => {
          const rates = response.json();
          this.rate = rates.rates.AUD;
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
