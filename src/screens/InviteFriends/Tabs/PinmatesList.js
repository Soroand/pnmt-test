// @ts-check

import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Loader, MySafeAreaView, Vertical } from '../../../components';
import { friendsList } from '../../../services/friends/friends';
import { getFriendsListComplete } from '../../../store/user/user.action';
import FriendList from '../components/FriendList';
import { SpinnerIcon } from '../../../components/SvgIcons';

import { getGameDetail } from '../../../store/games/games.action';
import { getGame } from '../../../services/games/games';

const PinmatesList = ({
  getFriendsListComplete,
  gameId,
  getGameDetail,
  isCreate,
  selectedFriends,
  setSelectedFriends,
  countPlayer,
}) => {
  const game = useSelector(state => state.games.game[gameId]);

  const lengthFriends = useSelector(
    state => state.user.myProfile.friends.length,
  );
  const userList = useSelector(state => state.user.users);
  const friendList = Object.values(userList).filter(
    item => item.friendshipStatus === 'friend',
  );
  const [loading, setLoading] = useState(!friendList.length);

  useEffect(() => {
    if (friendList.length !== lengthFriends) {
      friendsList()
        .then(response => {
          getFriendsListComplete(response.data.data);
          setLoading(false);
        })
        .catch(error => console.log('errorka', error));
    }
  }, [friendList, getFriendsListComplete, lengthFriends]);

  useEffect(() => {
    if (!game && gameId) {
      getGame(gameId)
        .then(response => {
          getGameDetail({ id: gameId, ...response.data.data });
        })
        .catch(error => console.log('errorkaa', error));
    }
  }, [game, gameId, getGameDetail]);

  return (
    <MySafeAreaView>
      {loading ? (
        <Vertical alignCenter justifyCenter style={{ height: 200 }}>
          <Loader />
        </Vertical>
      ) : (
        <FriendList
          title="Pinmate"
          list={friendList}
          game={game}
          isCreate={isCreate}
          selectedFriends={selectedFriends}
          setSelectedFriends={setSelectedFriends}
          countPlayer={countPlayer}
        />
      )}
    </MySafeAreaView>
  );
};

export default connect(
  null,
  { getFriendsListComplete, getGameDetail },
)(PinmatesList);
