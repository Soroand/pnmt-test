// @ts-check

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect, useSelector } from 'react-redux';
import { Text, Dimensions, Platform } from 'react-native';
import {
  MySafeAreaView,
  Vertical,
  GamePlayer,
  Horizontal,
  CT,
  Divider,
  H4,
  H2,
  GameCardWithBackground,
  BottomContainer,
  MyButton,
  ChatListItem,
  H3,
  Loader,
} from '../../components';
import ActionSheet from './ActionSheet';
import { MoreOptionsIcon, SpinnerIcon } from '../../components/SvgIcons';
import Carousel from 'react-native-snap-carousel';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../../constants/colors';
import chatList from '../../data/mockChatWithFriend.json';
import { getProfile } from '../../services/user/user';
import {
  addFriend,
  confirmFriend,
  removeFriend,
} from '../../services/friends/friends';
import {
  getProfileComplete,
  getFriendsListComplete,
  confirmAddToFriends,
  addToFriends,
  removeFromFriends,
} from '../../store/user/user.action';
import { convertToFormData } from '../../services/helper';
import DetailsCard from './detailsCard/details';

const UserProfile = ({
  navigation,
  route,
  getProfileComplete,
  confirmAddToFriends,
  addToFriends,
  removeFromFriends,
}) => {
  console.log('PROFILE PAGE', route.params);
  const sliderWidth = Dimensions.get('window').width;
  const actionSheet = useRef(null);
  const { id } = route.params;
  const buf = useSelector(state => state.user.users[id]);
  const [userData, setUserData] = useState(buf);
  const [userDataWasChange, setUserDataWasChange] = useState(false);
  const filteredGames = buf?.games?.filter(
    item => item.players?.filter(i => i.id !== id).length >= 0,
  );

  useEffect(() => {
    const headerTitle =
      userData?.friendshipStatus === 'friend' ? 'Friends' : 'Add to friends';

    navigation.setOptions({
      headerTitle,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => actionSheet.current.show()}
          style={styles.headerMore}>
          <MoreOptionsIcon width={20} height={4} color={colors.customBlack} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, userData]);

  useEffect(() => {
    getProfile(id)
      .then(response => {
        // если у нас в памяти нет выбранного пользователя, то загружаем его данные
        // если изменился его статус к нам, то обновляем его данные
        if (
          !userData ||
          response.data.data.friendshipStatus !== userData.friendshipStatus
        ) {
          changeUserData({ id, ...response.data.data });
        }
      })
      .catch(error => console.log('error', error));
  }, [changeUserData, id, userData, userDataWasChange]);

  useEffect(() => {
    if (userDataWasChange) {
      changeUserData({ id, ...buf });
      setUserDataWasChange(false);
    }
  }, [buf, changeUserData, id, userDataWasChange]);

  const changeUserData = useCallback(
    data => {
      getProfileComplete(data);
      setUserData(data);
    },
    [getProfileComplete],
  );

  const handleAddToFriends = () => {
    addFriend(convertToFormData({ friend_id: id }))
      .then(response => {
        if (response.data.success) {
          addToFriends(userData);
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleConfirmFriends = () => {
    confirmFriend(convertToFormData({ user_id: id }))
      .then(response => {
        if (response.data.success) {
          confirmAddToFriends(userData);
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleRemoveFromFriends = () => {
    removeFriend(convertToFormData({ user_id: userData.id }))
      .then(response => {
        console.log('response remove', response);
        if (response.data.success) {
          removeFromFriends(userData);
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      {userData ? (
        <>
          {/* <MySafeAreaView> */}
          <ScrollView>
            <Vertical
              style={[
                styles.container,
                {
                  paddingBottom:
                    userData?.friendshipStatus !== 'friend' ? 150 : 0,
                },
              ]}>
              <GamePlayer
                isProfile
                fullname={userData.fullName}
                verified={userData.isJobVerified}
                age={userData.age}
                workingPosition={userData.workingPosition}
                placeOfWork={userData.placeOfWork}
                languages={userData.languages}
                avatar={userData.avatar}
                country={userData.country}
              />
              <DetailsCard user={buf} />
              <Divider />
              {!!userData?.friendsText && userData.friendsText !== '' && (
                <>
                  <H4 style={styles.friendsInfo}>
                    {'Friends with '}
                    <Text style={styles.friendsWith}>
                      {userData.friendsText}
                    </Text>
                  </H4>
                  <Divider />
                </>
              )}
              {userData?.friendshipStatus === 'friend' && (
                <H2 style={styles.carouselTitle}>
                  Games with {userData?.fullName}
                </H2>
              )}
              {userData?.friendshipStatus === 'friend' &&
                filteredGames.length === 0 && (
                  <Text
                    style={{
                      marginBottom: 75,
                      fontSize: 16,
                      lineHeight: 18,
                      fontWeight: '400',
                      color: '#344154',
                    }}>
                    User don't have games yet
                  </Text>
                )}
            </Vertical>
            {userData?.friendshipStatus === 'friend' && (
              <>
                {filteredGames.length !== 0 && (
                  <Carousel
                    data={filteredGames}
                    removeClippedSubviews={false}
                    renderItem={({ item }) => {
                      return (
                        <GameCardWithBackground
                          navigation={navigation}
                          item={item}
                          isUserProfile
                        />
                      );
                    }}
                    sliderWidth={sliderWidth}
                    itemWidth={scale(305)}
                  />
                )}
                {/* <Vertical style={styles.container}>
                  <Divider />
                  <H2 style={styles.carouselTitle}>
                    Chats with {userData.fullName}
                  </H2>

                  {chatList.map((item, index) => (
                    <ChatListItem
                      key={index}
                      title={item.title}
                      lastMessageFrom={
                        item.isGroup ? item.lastMessageFrom : null
                      }
                      lastMessage={item.lastMessage}
                      avatar={item.isGroup ? null : item.userAvatar}
                      avatars={item.isGroup ? item.userAvatars : null}
                      date={item.date}
                    />
                  ))}
                </Vertical> */}
              </>
            )}
          </ScrollView>
          {userData?.friendshipStatus !== 'friend' && (
            <BottomContainer>
              <MyButton
                size="lg"
                disabled={userData?.friendshipStatus === 'requested'}
                gradientColors={colors.blueGradient}
                onPress={
                  userData?.friendshipStatus === 'notFriend'
                    ? handleAddToFriends
                    : handleConfirmFriends
                }>
                {userData.friendshipStatus === 'notFriend' && '+Add to friend'}
                {userData.friendshipStatus === 'pending' && 'Accept request'}
                {userData.friendshipStatus === 'requested' && 'Request is sent'}
              </MyButton>
            </BottomContainer>
          )}
          <ActionSheet
            ref={actionSheet}
            friendshipStatus={userData?.friendshipStatus}
            handleRemoveFromFriends={handleRemoveFromFriends}
          />
          {/* </MySafeAreaView> */}
        </>
      ) : (
        <Vertical
          alignCenter
          justifyCenter
          style={{
            height:
              Dimensions.get('window').height -
              (Dimensions.get('window').height / 100) * 33,
            backgroundColor: 'rgb(240,240,240)',
          }}>
          <Loader />
        </Vertical>
      )}
    </>
  );
};

export default connect(
  null,
  {
    getProfileComplete,
    getFriendsListComplete,
    confirmAddToFriends,
    addToFriends,
    removeFromFriends,
  },
)(UserProfile);
