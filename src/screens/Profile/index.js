// @ts-check

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, RefreshControl, BackHandler } from 'react-native';
import {
  MySafeAreaView,
  Horizontal,
  Vertical,
  Avatar,
  H2,
  H3,
  H4,
  ST,
  CT,
  Divider,
  MyButton,
  JoiningCard,
  ManagePlayers,
  Loader,
} from '../../components';
import { SettingsIcon } from '../../components/SvgIcons';
import styles from './styles';
import colors from '../../constants/colors';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Friends from './tabs/friends';
import GameCard from './tabs/gameCard';
import GoPro from './tabs/goPro';
import {
  friendsList,
  friendRequestsList,
} from '../../services/friends/friends';
import {
  getMyProfile,
  getMyInviteGames,
  getJoinRequests,
} from '../../services/user/user';

// import { tabBarVisible } from '../../store/app/app.action';
import {
  getMyProfileComplete,
  getFriendsListComplete,
} from '../../store/user/user.action';
import InfoCard from './InfoCard/infoCard';

const Profile = ({ navigation }) => {
  const user = useSelector(state => state.user.myProfile);
  const [refreshing, setRefreshing] = useState(false);
  const [untouchable, setUntouchable] = useState(false);

  const managePlayers = useRef(null);
  let fall = useRef(new Animated.Value(1)).current;
  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  // ===================== BOTTOM SHEET ===================== //
  // const [untouchable, setUntouchable] = useState(false);
  // const [selectedGameForPopup, setSelectedGameForPopup] = useState(null);
  // const [cancel, setCancel] = useState(false);
  // const [leave, setLeave] = useState(false);
  // const [removedPlayers, setRemovedPlayers] = useState([]);

  // const openBottomSheet = data => {
  //   navigation.setOptions({
  //     tabBarVisible: false,
  //   });
  //   setSelectedGameForPopup(data);
  //   dispatch({ type: 'TAB_BAR_VISIBLE', payload: false });
  //   managePlayers.current.snapTo(0);
  // };

  // const heightPopup =
  //   selectedGameForPopup?.players.length === 4
  //     ? '80%'
  //     : selectedGameForPopup?.players.length === 3
  //     ? '70%'
  //     : '50%';

  // const closeBottomSheet = () => {
  //   managePlayers.current.snapTo(1);
  //   dispatch({ type: 'TAB_BAR_VISIBLE', payload: true });
  // };

  // const bottomSheetOpen = () => {
  //   navigation.setOptions({
  //     tabBarVisible: false,
  //   });
  //   setUntouchable(true);
  // };

  // const bottomSheetClose = () => {
  //   setUntouchable(false);
  //   setCancel(false);
  //   setLeave(false);
  //   navigation.setOptions({
  //     tabBarVisible: true,
  //   });
  // };
  // ======================================================= //

  const [activeTab, setActiveTab] = useState('Friends');
  const tabs = {
    // Games: (
    //   <GameCard openBottomSheet={openBottomSheet} navigation={navigation} />
    // ),
    Friends: <Friends navigation={navigation} />,
    'Go Pro': <GoPro />,
  };

  const hanldeGoToSettings = () => {
    navigation.push('Settings');
  };

  const dispatch = useDispatch();
  const update = () => {
    getMyProfile()
      .then(response => {
        dispatch(getMyProfileComplete(response.data.data));
      })
      .catch(error => console.log('error: profile wasnt downloaded'));
    friendsList()
      .then(response => {
        dispatch(getFriendsListComplete(response.data.data));
      })
      .catch(error => console.log('error', error));
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  // useEffect(() => {
  //   const back = () => {
  //     bottomSheetClose();
  //     closeBottomSheet();
  //     return true;
  //   };

  //   let backHandler = null;

  //   if (untouchable) {
  //     backHandler = BackHandler.addEventListener('hardwareBackPress', back);
  //   }

  //   return () => {
  //     if (untouchable) {
  //       backHandler.remove();
  //     }
  //   };
  // });

  return !refreshing ? (
    <>
      <MySafeAreaView>
        <ScrollView
          scrollEnabled={!untouchable}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={update} />
          }>
          <View pointerEvents={untouchable ? 'none' : 'auto'}>
            <Vertical style={styles.container}>
              <Horizontal spaceBetween>
                <CT style={styles.appName} color={colors.inactive}>
                  Pinmate
                </CT>
                <TouchableOpacity
                  style={styles.setttingsIcon}
                  onPress={hanldeGoToSettings}>
                  <SettingsIcon
                    color={colors.grey}
                    width={18}
                    height={18}
                    viewBox="0 0 11 11"
                  />
                </TouchableOpacity>
              </Horizontal>
              <Horizontal style={styles.marginTop20}>
                <Avatar width={90} height={90} src={user?.avatar} />

                <Vertical style={[styles.marginLeft10, { marginBottom: 25 }]}>
                  <Vertical>
                    <H2>{user.fullName}</H2>
                    <ST>
                      {user?.workingPosition} in {user?.placeOfWork}
                    </ST>
                  </Vertical>
                </Vertical>
              </Horizontal>
              <InfoCard />
              <Divider style={[styles.marginTop25]} />
            </Vertical>
            <JoiningCard navigation={navigation} />

            <Horizontal
              style={[styles.profileTabs, { justifyContent: 'space-around' }]}>
              {/* <MyButton
                type="link"
                color={activeTab === 'Games' ? colors.lightBlue : colors.grey}
                textWrapper={activeTab === 'Games' ? H3 : H4}
                onPress={() => setActiveTab('Games')}>
                Games
              </MyButton> */}
              <MyButton
                type="link"
                color={activeTab === 'Friends' ? colors.lightBlue : colors.grey}
                textWrapper={activeTab === 'Friends' ? H3 : H4}
                onPress={() => setActiveTab('Friends')}>
                Friends
              </MyButton>
              <MyButton
                type="link"
                color={activeTab === 'Go Pro' ? colors.lightBlue : colors.grey}
                textWrapper={activeTab === 'Go Pro' ? H3 : H4}
                onPress={() => setActiveTab('Go Pro')}>
                Go Pro
              </MyButton>
            </Horizontal>

            <Vertical style={styles.background}>{tabs[activeTab]}</Vertical>
          </View>
        </ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#000',
              opacity: animatedShadowOpacity,
            },
          ]}
        />
      </MySafeAreaView>
      {/* <BottomSheet
        ref={managePlayers}
        initialSnap={1}
        onOpenStart={bottomSheetOpen}
        onCloseStart={bottomSheetClose}
        callbackNode={fall}
        borderRadius={20}
        snapPoints={[heightPopup, 0]}
        renderContent={() => (
          <ManagePlayers
            data={selectedGameForPopup}
            cancel={cancel}
            setCancel={setCancel}
            leave={leave}
            setLeave={setLeave}
            removedPlayers={removedPlayers}
            setRemovedPlayers={setRemovedPlayers}
            closeBottomSheet={closeBottomSheet}
            bottomSheetClose={bottomSheetClose}
            navigation={navigation}
          />
        )}
      /> */}
    </>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Loader />
    </View>
  );
};

export default Profile;
