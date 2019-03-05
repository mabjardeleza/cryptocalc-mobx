import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import { PRICES, pricesActions } from '../actions';

function* requestPrices(action) {
  try {
    const key = action.payload;
    const url = `/markets/coinbase-pro/${key}/price`;
    const response = yield call(fetch, url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const marketPrices = yield response.json();
    marketPrices.exchange = key;
    yield put(pricesActions.success(marketPrices));
  } catch (error) {
    yield put(pricesActions.error(error));
  }
}

export function* watchRequestPrices() {
  yield takeEvery(PRICES.REQUEST, requestPrices);
}
