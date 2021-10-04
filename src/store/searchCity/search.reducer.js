import { handleActions } from 'redux-actions';
import { FILTER_CITY } from '../contants';
import { CLEAR_CITY } from '../contants';

const initialState = {
  filter: {
    city: [],
  },
};

export default handleActions(
  {
    [FILTER_CITY]: (state = initialState, { payload }) => {
      if (state.filter.city.find(city => city === payload)) {
        let newList = state.filter.city.filter(city => city !== payload);
        newList.unshift(payload);
        return {
          ...state,
          filter: {
            city: [...newList],
          },
        };
      } else {
        return {
          ...state,
          filter: {
            city: [payload, ...state.filter.city],
          },
        };
      }
    },
    [CLEAR_CITY]: (state = initialState, { payload }) => ({
      ...state,
      filter: {
        city: [],
      },
    }),
  },
  initialState,
);
