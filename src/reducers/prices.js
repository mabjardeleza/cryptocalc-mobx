import { PRICES } from '../actions';

const initialPrices = {
  prices: {},
  loading: false,
  error: false,
};

export function prices(state = initialPrices, action) {
  switch (action.type) {
    case PRICES.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case PRICES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        prices: {
          ...state.prices,
          [action.payload.exchange]: action.payload.result.price,
        },
      };

    case PRICES.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}
