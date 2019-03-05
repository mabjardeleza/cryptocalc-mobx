export const EXCHANGE_RATE = {
  REQUEST: 'request_exchange_rate',
  SUCCESS: 'success_exchange_rate',
  ERROR: 'error_exchange_rate',
};

export const exchangeRateActions = {
  request: () => ({ type: EXCHANGE_RATE.REQUEST }),
  success: exchange => ({ type: EXCHANGE_RATE.SUCCESS, payload: exchange }),
  error: () => ({ type: EXCHANGE_RATE.ERROR }),
};
