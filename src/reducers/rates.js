import { EXCHANGE_RATE } from '../actions';

const initialRate = {
  currentRate: 0,
  loading: false,
  error: false,
};

export function rates(state = initialRate, action) {
  switch (action.type) {
    case EXCHANGE_RATE.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case EXCHANGE_RATE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentRate: action.payload.rates.AUD,
      };

    case EXCHANGE_RATE.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}
