import {
    call,
    put,
    takeEvery,
  } from 'redux-saga/effects';

  import { EXCHANGE_RATE, exchangeRateActions } from '../actions';

  function* requestRates() {
    try {
      const url = `https://openexchangerates.org/api/latest.json?app_id=9d13fcd70a6a48b58ae9d823cccd7119&symbols=AUD`;
      const response = yield call(fetch, url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const rate = yield response.json();
      yield put(exchangeRateActions.success(rate));
    } catch (error) {
      yield put(exchangeRateActions.error(error));
    }
  }

  export function* watchRequestRates() {
    yield takeEvery(EXCHANGE_RATE.REQUEST, requestRates);
  }
