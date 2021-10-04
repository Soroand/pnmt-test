import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import reducers from './root.reducer.js';
import env from 'react-native-config';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];

const persistConfig = {
  key: 'root',
  blacklist: ['user', 'games', 'clubs'],
  whiteList: ['filter', 'auth', 'faq', 'showTutorial'],
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

middleware.push(thunk);

function toCompose(...middleware) {
  return composeWithDevTools(...middleware);
}

const configureStore = initialState => {
  const store = createStore(
    persistedReducer,
    initialState,
    toCompose(applyMiddleware(...middleware)),
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
