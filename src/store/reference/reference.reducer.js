import { handleActions } from 'redux-actions';
import { LANGUNAGES, COMPLETE } from '../contants';

const initialState = {
  languages: null,
};

export default handleActions(
  {
    [LANGUNAGES + COMPLETE]: (state, { payload }) => {
      return {
        ...state,
        languages: payload,
      };
    },
  },
  initialState,
);
