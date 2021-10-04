// @ts-check

import React from 'react';
import { View } from 'react-native';
import { BottomContainer, MyButton } from '../../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  PinmatesIcon,
  FacebookIcon,
  LinkedinIcon,
  PersonIcon,
} from '../../components/SvgIcons';

import PinmatesList from './Tabs/PinmatesList';
import FacebookList from './Tabs/FacebookList';
import LinkedinList from './Tabs/LinkedinList';
import PhonebookList from './Tabs/PhonebookList';

import Share from 'react-native-share';
import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

const TopTabs = ({
  route,
  isCreate,
  selectedFriends,
  setSelectedFriends,
  closeBottomSheet,
  countPlayer,
}) => {
  const handleTabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      const Icon = icons[route.name];
      return <View>{Icon(focused)}</View>;
    },
  });

  const handleShare = () => {
    Share.open({
      message: 'Hey there! Come and play golf with me in Pinmate app!!',
      title: 'Pinmate app',
    });
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={handleTabScreenOptions}
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: '#fafafa',
            borderWidth: 0.5,
            borderColor: colors.lightGrey,
          },
          tabStyle: {
            height: 58,
            borderRightWidth: 0.5,
            borderColor: colors.lightGrey,
          },
          showIcon: true,
          showLabel: false,
          iconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          indicatorStyle: {
            opacity: 0,
          },
        }}>
        <Tab.Screen
          name="Pinmates"
          children={() => (
            <PinmatesList
              selectedFriends={selectedFriends}
              setSelectedFriends={setSelectedFriends}
              gameId={route?.params?.gameId}
              isCreate={isCreate}
              countPlayer={countPlayer}
            />
          )}
          // initialParams={{ gameId: route.params.gameId, isCreate }}
        />
        {/* <Tab.Screen name="Facebook" component={FacebookList} />
        <Tab.Screen name="LinkedIn" component={LinkedinList} /> */}
        <Tab.Screen
          name="Phonebook"
          component={PhonebookList}
          initialParams={{ gameId: route?.params?.gameId }}
        />
      </Tab.Navigator>
      <BottomContainer withoutOffset={isCreate}>
        <MyButton
          size="lg"
          gradientColors={colors.blueGradient}
          onPress={isCreate ? closeBottomSheet : handleShare}>
          {isCreate ? 'Done' : 'Invite'}
        </MyButton>
      </BottomContainer>
    </>
  );
};

const icons = {
  Pinmates: focuced => (
    <PinmatesIcon
      width={21}
      height={28}
      color={focuced ? colors.customBlack : colors.lightGrey}
    />
  ),
  Facebook: focuced => (
    <FacebookIcon
      width={13}
      height={30}
      color={focuced ? colors.customBlack : colors.lightGrey}
    />
  ),
  LinkedIn: focuced => (
    <LinkedinIcon
      width={30}
      height={28}
      color={focuced ? colors.customBlack : colors.lightGrey}
    />
  ),
  Phonebook: focuced => (
    <PersonIcon
      width={25}
      height={30}
      filled
      color={focuced ? colors.customBlack : colors.lightGrey}
    />
  ),
};

export default TopTabs;
