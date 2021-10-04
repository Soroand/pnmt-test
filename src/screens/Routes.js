// @ts-check
import React, { useEffect, useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../navigation/AuthStack';
import Intro from './Intro';
import MainStack from '../navigation/MainStack';
import { getMyProfile } from '../services/user/user';
import { getMyProfileComplete } from '../store/user/user.action';
import OneSignal from 'react-native-onesignal';
import axios from 'axios';
import env from 'react-native-config';

const playerId = async () => {
  const data = await OneSignal.getDeviceState();
  return data.userId;
};

playerId().then(userId => {
  axios.defaults.baseURL = env.API_URL_BASE;
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
  axios.defaults.headers.common['Accept-Language123321'] = 'en-US';
  axios.defaults.headers.get['PlayerId'] = `${userId}`;
  axios.defaults.headers.post['PlayerId'] = `${userId}`;
});

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

const Main = connect(
  null,
  { getMyProfileComplete },
)(({ getMyProfileComplete }) => {
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(token);
      getMyProfile()
        .then(response => {
          getMyProfileComplete(response.data.data);
        })
        .catch(error => console.log('error: profile wasnt downloaded'));
    }
  }, [token, getMyProfileComplete]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const initialRouteName = token !== null ? 'BottomTabs' : 'Intro';

  return (
    <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
      <Stack.Screen name="BottomTabs" component={MainStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
});

export default Routes;
