import { createAction } from 'redux-actions';

import { FILTER_CITY } from '../contants';
import { CLEAR_CITY } from '../contants';

export const filterCity = createAction(FILTER_CITY);
export const clearCity = createAction(CLEAR_CITY);
