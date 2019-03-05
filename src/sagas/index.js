import { fork, all } from 'redux-saga/effects';
import { watchRequestPrices } from './prices';
import { watchRequestRates } from './rates';

export default function* rootSaga() {
  yield all([
    fork(watchRequestPrices),
    fork(watchRequestRates),
  ]);
}
