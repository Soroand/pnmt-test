import { handleActions } from 'redux-actions';

const initialState = {
  showTutorial: true,
};

export default handleActions(
  {
    ['SHOW_TUTORIAL']: (state, { payload }) => {
      console.log('SHOW TUTORIAL', payload);
      return {
        ...state,
        showTutorial: payload,
      };
    },
  },
  initialState,
);
