// @ts-check

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChatList } from '../screens/GamesChat';
import { Animated } from 'react-native';
import { H4, Horizontal } from '../components';
import { SearchIcon } from '../components/SvgIcons';
import colors from '../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';
import BackArrowBlack from '../components/SvgIcons/BackArrowBlack/BackArrowBlack';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="ChatList">
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                dispatch({
                  type: 'TAB_BAR_VISIBLE',
                  payload: true,
                });
                navigation.goBack();
              }}
              style={{
                marginLeft: 15,
                justifyContent: 'center',
              }}>
              <Horizontal>
                <BackArrowBlack width={12} height={12} />
                <Animated.Text
                  style={{
                    color: '#344154',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  My Games
                </Animated.Text>
              </Horizontal>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = ScaledSheet.create({
  header: {
    alignSelf: 'center',
  },
  marginLeft25: {
    marginLeft: '25@ms',
  },
  marginRight25: {
    marginRight: '25@ms',
  },
});
