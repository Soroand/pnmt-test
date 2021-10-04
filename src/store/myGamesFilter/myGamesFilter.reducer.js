import { handleActions } from 'redux-actions';
import { FILTER_MYGAMES } from '../contants';
import { CLEAR_ALL } from '../contants';

const initialState = {
  myGames: [],
};

export default handleActions(
  {
    [FILTER_MYGAMES]: (state = initialState, { payload }) => {
      if (state.myGames.includes(payload)) {
        state.myGames.splice(state.myGames.indexOf(payload), 1);
        return {
          ...state,
          myGames: [...state.myGames],
        };
      } else if (payload === 'Active' && state.myGames.includes('Passed')) {
        state.myGames.splice(state.myGames.indexOf('Passed'), 1);
        return {
          ...state,
          myGames: [...state.myGames, payload],
        };
      } else if (payload === 'Passed' && state.myGames.includes('Active')) {
        state.myGames.splice(state.myGames.indexOf('Active'), 1);
        return {
          ...state,
          myGames: [...state.myGames, payload],
        };
      } else if (
        payload === 'Creator' &&
        state.myGames.includes('Participant')
      ) {
        state.myGames.splice(state.myGames.indexOf('Participant'), 1);
        return {
          ...state,
          myGames: [...state.myGames, payload],
        };
      } else if (
        payload === 'Participant' &&
        state.myGames.includes('Creator')
      ) {
        state.myGames.splice(state.myGames.indexOf('Creator'), 1);
        return {
          ...state,
          myGames: [...state.myGames, payload],
        };
      } else {
        return {
          ...state,
          myGames: [...state.myGames, payload],
        };
      }
    },

    [CLEAR_ALL]: (state = initialState) => {
      return {
        ...state,
        myGames: [],
      };
    },
  },
  initialState,
);
