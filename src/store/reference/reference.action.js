import { createAction } from 'redux-actions';

import { LANGUNAGES, COMPLETE } from '../contants';

export const getLanguagesList = createAction(LANGUNAGES + COMPLETE);
