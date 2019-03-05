export const PRICES = {
  REQUEST: 'request_prices',
  SUCCESS: 'success_prices',
  ERROR: 'error_prices',
};

export const pricesActions = {
  request: key => ({ type: PRICES.REQUEST, payload: key }),
  success: prices => ({ type: PRICES.SUCCESS, payload: prices }),
  error: () => ({ type: PRICES.ERROR }),
};
