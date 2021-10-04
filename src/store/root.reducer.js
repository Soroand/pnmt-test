import { combineReducers } from 'redux';

import auth from './auth/auth.reducer';
import user from './user/user.reducer';
import games from './games/games.reducer';
import clubs from './clubs/clubs.reducer';
import reference from './reference/reference.reducer';
import location from './location/location.reducer';
import filter from './searchCity/search.reducer';
import app from './app/app.reducer';
import faq from './faq/faq.reducer';
import myGamesFilter from './myGamesFilter/myGamesFilter.reducer';
import showTutorial from './tutorial/tutorial.reducer';
import profileInfo from './profileInfo/profileInfo.reducer';

export default combineReducers({
  app,
  auth,
  user,
  games,
  reference,
  clubs,
  location,
  filter,
  faq,
  myGamesFilter,
  showTutorial,
  profileInfo,
});
