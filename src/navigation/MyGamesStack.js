// @ts-check

import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyList } from '../screens/MyGames';
import { ScaledSheet } from 'react-native-size-matters';
import { getPassedGames } from 'services/user/user';
import { getMyPassedGames } from 'store/user/user.action';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default function MyGamesStack({ navigation }) {
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   getPassedGames().then(response =>
  //     dispatch(getMyPassedGames(response.data.data)),
  //   );
  // });

  const headerOptions = ({}) => ({
    headerTitle: 'My Games',
    headerTitleStyle: styles.header,
  });

  return (
    <Stack.Navigator initialRouteName="MyGames">
      <Stack.Screen name="MyGames" component={MyList} options={headerOptions} />
    </Stack.Navigator>
  );
}

const styles = ScaledSheet.create({
  header: {
    alignSelf: 'center',
    color: '#344154',
    fontSize: 20,
    lineHeight: 24,
  },
  marginLeft25: {
    marginLeft: '25@ms',
  },
  marginRight25: {
    marginRight: '25@ms',
  },
});
