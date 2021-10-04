import { createAction } from 'redux-actions';

import { FILTER_MYGAMES } from '../contants';
import { CLEAR_ALL } from '../contants';

export const filterStatus = createAction(FILTER_MYGAMES);
export const clearAll = createAction(CLEAR_ALL);
