import { handleActions } from 'redux-actions';
import { LOGIN, CONFIRM_NUMBER, LOGOUT, COMPLETE } from '../contants';

const initialState = {
  auth: null,
  authError: null,
  token: null,
};

export default handleActions(
  {
    [LOGIN + COMPLETE]: (state, { payload }) => ({
      ...state,
      data: payload,
      auth: true,
      token: payload.token,
    }),

    [CONFIRM_NUMBER + COMPLETE]: (state, { payload }) => ({
      ...state,
      auth: true,
      token: payload.token,
    }),
    [LOGOUT]: () => ({
      auth: null,
      authError: null,
      token: null,
    }),
  },
  initialState,
);
