import { handleActions } from 'redux-actions';
import { LOCATION, COMPLETE } from '../contants';

const initialState = {
  location: {
    city: '',
  },
};

export default handleActions(
  {
    [LOCATION]: (state = initialState, { payload }) => {
      return {
        ...state,
        location: {
          city: payload,
        },
      };
    },
    [LOCATION + COMPLETE]: (state = initialState, { payload }) => ({
      ...state,
      location: {
        ...state.city,
        city: payload,
      },
    }),
  },
  initialState,
);
