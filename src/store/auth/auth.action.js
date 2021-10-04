import { createAction } from 'redux-actions';

import { LOGIN, CONFIRM_NUMBER, LOGOUT, COMPLETE } from '../contants';

export const loginComplete = createAction(LOGIN + COMPLETE);

export const confirmNumberComplete = createAction(CONFIRM_NUMBER + COMPLETE);

export const logout = createAction(LOGOUT);
