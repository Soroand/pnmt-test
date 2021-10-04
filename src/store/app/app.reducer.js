import { handleActions } from 'redux-actions';

const initialState = {
  tabbar: {
    isVisible: true,
  },
};

export default handleActions(
  {
    ['TAB_BAR_VISIBLE']: (state, { payload }) => {
      return {
        ...state,
        tabbar: {
          ...state.tabbar,
          isVisible: payload,
        },
      };
    },
  },
  initialState,
);
