// @ts-check

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import NumberConfirmation from '../screens/NumberConfirmation';
import ForgetPassword from '../screens/ForgetPassword';
import ForgetPasswordEmail from '../screens/ForgetPassword/emailForm';
import EmailPasswordReset from '../screens/ForgetPassword/EmailPasswordReset';
import ConfirmCode from '../screens/ForgetPassword/ConfirmCode';
import ConfirmCodeSuccess from '../screens/ForgetPassword/ConfirmCodeSuccess';
import { BackButton } from '../components';

const Stack = createStackNavigator();

export default function AuthStack() {
  const header = ({ navigation }) => ({
    headerTitle: null,
    headerTransparent: true,
    headerTintColor: '#fff',
    headerLeft: () => <BackButton navigation={navigation} />,
  });
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={header} />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={header}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={({ navigation }) => ({
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <BackButton dark navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ForgetPasswordEmail"
        component={ForgetPasswordEmail}
        options={({ navigation }) => ({
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <BackButton dark navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="EmailPasswordReset"
        component={EmailPasswordReset}
        options={({ navigation }) => ({
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <BackButton dark navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ConfirmCode"
        component={ConfirmCode}
        options={({ navigation }) => ({
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <BackButton dark navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ConfirmCodeSuccess"
        component={ConfirmCodeSuccess}
        options={({ navigation }) => ({
          headerTitle: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <BackButton dark navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="NumberConfirmation"
        component={NumberConfirmation}
        options={header}
      />
    </Stack.Navigator>
  );
}
