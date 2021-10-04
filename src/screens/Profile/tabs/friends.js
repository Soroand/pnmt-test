// @ts-check

import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { ScrollView, View, Image } from 'react-native';
import {
  Vertical,
  H3,
  H1,
  H4,
  Divider,
  GamePlayer,
  Loader,
} from '../../../components';
import {
  friendsList,
  friendRequestsList,
} from '../../../services/friends/friends';
import {
  getFriendsListComplete,
  requestFriendship,
} from '../../../store/user/user.action';
import styles from '../styles';
import colors from '../../../constants/colors';
import uuid from 'react-native-uuid';

const Friends = ({ navigation, getFriendsListComplete, requestFriendship }) => {
  const userList = useSelector(state => state.user.users);
  const myFriendsList = Object.values(userList).filter(
    item => item.friendshipStatus === 'friend',
  );

  const requstedList = Object.values(userList).filter(
    item => item.friendshipStatus === 'pending',
  );

  const [loading, setLoading] = useState(!myFriendsList.length);

  useEffect(() => {
    friendsList()
      .then(response => {
        getFriendsListComplete(response.data.data);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  }, [getFriendsListComplete]);

  useEffect(() => {
    friendRequestsList()
      .then(response => {
        const oldData = requstedList.sort().toString();
        const newData = response.data.data.sort().toString();

        if (oldData !== newData) {
          requestFriendship(response.data.data);
        }
      })
      .catch(error => console.log('error', error));
  }, [requestFriendship]);

  // myFriendsList.length !== 0 ? (
  //   <Image
  //     source={require('../../../assets/images/noFriends.png')}
  //     style={{ borderRadius: 150 }}
  //   />
  // )

  return (
    <ScrollView style={{ marginBottom: 50 }}>
      {loading ? (
        <Vertical style={{ height: 200 }} alignCenter justifyCenter>
          <Loader />
        </Vertical>
      ) : myFriendsList.length === 0 && requstedList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../../assets/images/noFriends.png')}
            style={{ borderRadius: 150 }}
          />
          <H1 style={styles.emptyTitle} color={'rgb(52,65,84)'}>
            No friends
          </H1>
          <H4 style={styles.emptyDescription} color={colors.grey}>
            Your friends list is empty, you can add them right now
          </H4>
        </View>
      ) : (
        <>
          {requstedList.length > 0 && (
            <Vertical style={styles.friendsContainer}>
              <H3 style={styles.friendsHeader}>Requests</H3>
              {requstedList.map((user, index) => (
                <Vertical key={uuid.v4()}>
                  <GamePlayer
                    id={user.id}
                    friend={user}
                    age={user.age}
                    fullname={user.fullName}
                    avatar={user.avatar}
                    country={user.country}
                    workingPosition={user?.workingPosition}
                    placeOfWork={user?.placeOfWork}
                    hcp={user.statistics?.handicap}
                    gir={user.statistics?.gir}
                    rounds={user.statistics?.rounds}
                    friendRequest
                    navigation={navigation}
                  />
                  <Divider />
                </Vertical>
              ))}
            </Vertical>
          )}

          <Vertical style={styles.friendsContainer}>
            <H3 style={styles.friendsHeader}>All friends</H3>
            {myFriendsList.map((user, index) => (
              <Vertical key={uuid.v4()}>
                <GamePlayer
                  id={user.id}
                  fullname={user.fullName}
                  avatar={user.avatar}
                  age={user.age}
                  workingPosition={user?.workingPosition}
                  placeOfWork={user?.placeOfWork}
                  hcp={user.statistics?.hcp}
                  gir={user.statistics?.gir}
                  rounds={user.statistics?.rounds}
                  navigation={navigation}
                  verified={user.isJobVerified}
                />
                <Divider />
              </Vertical>
            ))}
          </Vertical>
        </>
      )}
    </ScrollView>
  );
};

export default connect(
  null,
  { getFriendsListComplete, requestFriendship },
)(Friends);
