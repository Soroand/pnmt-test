/* eslint-disable react-native/no-inline-styles */
// @ts-check

import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import colors from '../constants/colors';
import { View, Text, Platform, Dimensions } from 'react-native';
import {
  GameListIcon,
  GameChatIcon,
  Magnifying,
  ProfileIcon,
} from '../components/SvgIcons';
import { getThePhone } from '../components/PhoneLib/getThePhone';
import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStack from './ChatStack';
import GamesChat from '../screens/GamesChat/ChatList';
import MyGamesStack from '../navigation/MyGamesStack';
import Profile from '../screens/Profile';
import { ScaledSheet } from 'react-native-size-matters';
import GamesList from '../screens/GamesList';
import { tabBarVisible } from '../store/app/app.action';
import { CustomWindow } from '../components/TourGuide';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  TourGuideProvider,
  TourGuideZoneByPosition,
  useTourGuideController,
} from 'rn-tourguide';
import { FilterContext, FilterProvider } from '../context/FilterContext';
import MyGamesModalContent from '../screens/MyGames/MyGamesList/myGamesModalContent';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const myId = useSelector(state => state.user.myProfile.id);
  const myGames = useSelector(state => state.user.myProfile.games);
  const { sheetRef } = useContext(FilterContext);
  const showTutorial = useSelector(state => state.showTutorial.showTutorial);
  // находим игры, в которых пользователь создатель и где есть запросы
  const joinRequestsGamesLength = myGames
    ?.map(
      i =>
        i.players.filter((p, idx) => idx === 0 && p.id === myId).length > 0 &&
        i,
    )
    .filter(i => i && i.joinRequests.length > 0).length;
  const icons = {
    Browse: focuced => (
      <Icon>
        <Magnifying
          width={31}
          height={23}
          color={focuced ? colors.lightBlue : colors.customBlack}
        />
      </Icon>
    ),
    MyGames: focuced => (
      <Icon>
        <GameListIcon
          width={41}
          height={31}
          color={focuced ? colors.lightBlue : colors.customBlack}
        />
      </Icon>
    ),
    Profile: focuced => (
      <Icon data={joinRequestsGamesLength}>
        <ProfileIcon
          width={31}
          height={20}
          color={focuced ? colors.lightBlue : colors.customBlack}
        />
      </Icon>
    ),
  };
  const isVisible = useSelector(state => state.app.tabbar.isVisible);

  const handleTabScreenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        const icon = icons[route.name];
        return <View style={styles.iconView}>{icon(focused)}</View>;
      },
      tabBarLabel: ({ focused }) => (
        <Text style={[styles.labelDefault, focused && styles.labelFocused]}>
          {route.name === 'MyGames' ? 'My Games' : route.name}
        </Text>
      ),
      tabBarVisible: isVisible,
    };
  };
  const { canStart, start, stop, eventEmitter } = useTourGuideController();

  useEffect(() => {
    showTutorial && start();
  }, [canStart]);

  const thePhone = getThePhone(DeviceInfo.getModel().toLowerCase());
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
      }}>
      <TourGuideZoneByPosition
        zone={1}
        shape={'rectangle'}
        isTourGuide
        top={
          Platform.OS === 'ios'
            ? DeviceInfo.hasNotch()
              ? (screenHeight / 100) * 17.5
              : (screenHeight / 100) *
                (screenHeight > 900
                  ? 20
                  : screenHeight > 750
                  ? 20
                  : screenHeight < 700
                  ? 15
                  : 20)
            : (screenHeight / 100) * 15 // IF ANDROID
        }
        left={'130%'}
        width={0}
        height={0}
      />

      <TourGuideZoneByPosition
        zone={2}
        shape={'rectangle'}
        isTourGuide
        top={thePhone[0].sizesTwo}
        left={25}
        right={0}
        width={'80%'}
        height={50}
      />

      <TourGuideZoneByPosition
        zone={3}
        shape={'rectangle'}
        isTourGuide
        top={thePhone[0].sizesThree}
        left={Platform.OS === 'ios' ? 25 : 20}
        width={150}
        height={50}
      />

      <TourGuideZoneByPosition
        zone={4}
        shape={'rectangle'}
        isTourGuide
        top={thePhone[0].sizesFour}
        left={thePhone[0].left}
        width={65}
        height={60}
        tooltipBottomOffset={75}
      />

      <Tab.Navigator
        initialRouteName="Browse"
        screenOptions={handleTabScreenOptions}
        tabBarOptions={{
          style: [styles.tabBarStyle],
          iconStyle: {
            marginTop: 15,
          },
          activeTintColor: colors.customBlack,
          inactiveTintColor: colors.inactive,
        }}>
        <Tab.Screen name="Browse" component={GamesList} />
        <Tab.Screen name="MyGames" component={MyGamesStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <BottomSheet
        ref={sheetRef}
        initialSnap={1}
        snapPoints={[(screenHeight / 100) * 85, 0]}
        borderRadius={15}
        renderContent={() => <MyGamesModalContent />}
      />
    </View>
  );
};

const BottomTabs = props => {
  return (
    <TourGuideProvider
      {...{
        borderRadius: 10,
        tooltipComponent: CustomWindow,
      }}>
      <FilterProvider>
        <Tabs {...props} />
      </FilterProvider>
    </TourGuideProvider>
  );
};

const Icon = ({ children, data = null }) => (
  <>
    {children}
    {!!data && (
      <View style={styles.iconIndicator}>
        <Text style={styles.iconIndicatorText}>{data}</Text>
      </View>
    )}
  </>
);

const styles = ScaledSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 5,

    backgroundColor: colors.white,

    height:
      DeviceInfo.getModel() === 'iPhone 12' ||
      DeviceInfo.getModel() === 'iPhone 12 Pro' ||
      DeviceInfo.getModel() === 'iPhone 12 Pro Max'
        ? '12.5%'
        : '12%',
    position: 'absolute',
    bottom: 0,
    borderColor: 'transparent',

    shadowColor: 'rgba(0, 0, 0, 0.19)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 30,
    elevation: 0,
    shadowOpacity: 1,
  },
  labelDefault: {
    fontSize: 13,
    lineHeight: 14,
    marginBottom: DeviceInfo.hasNotch() ? 0 : 15,
  },
  labelFocused: {
    fontSize: 13,
    lineHeight: 14,
    fontWeight: '500',
    color: colors.lightBlue,
  },
  iconView: {
    marginBottom: 5,
  },
  iconIndicator: {
    position: 'absolute',
    backgroundColor: colors.red,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    right: '-8@ms',
    top: '-6@ms',
  },
  iconIndicatorText: {
    fontSize: '12@ms',
    color: colors.white,
  },
});

export default BottomTabs;
