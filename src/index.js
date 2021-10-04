// @ts-check

import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './screens/Routes';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import configureStore from './store';

const { store, persistor } = configureStore();

const App = () => {
  useEffect(() => {
    OneSignal.setAppId('');
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.getDeviceState();
  }, []);
  // PLAYER ID FOR ONESIGNAL
  async function playerId() {
    await OneSignal.getDeviceState().then((res) => res.userId);
  }
  playerId();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
