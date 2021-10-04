const initialState = {
  skills: [],
  aboutMe: '',
  myInterests: [],
  languages: [],
};

export default function skills(state = initialState, action) {
  if (action.type === 'SET_SKILLS') {
    return {
      ...state,
      skills: [...action.payload],
    };
  }
  if (action.type === 'SET_BIO') {
    return {
      ...state,
      aboutMe: action.payload,
    };
  }
  if (action.type === 'SET_INTERESTS') {
    return {
      ...state,
      myInterests: [...action.payload],
    };
  }
  if (action.type === 'SET_LANGUAGES') {
    return {
      ...state,
      languages: [...action.payload],
    };
  }
  return initialState;
}
