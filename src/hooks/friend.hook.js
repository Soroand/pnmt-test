import { useState, useEffect, useCallback } from 'react';
import { connect, useSelector } from 'react-redux';
import { getProfile } from '../services/user/user';
import {
  addFriend,
  confirmFriend,
  removeFriend,
} from '../services/friends/friends';
import {
  getProfileComplete,
  getFriendsListComplete,
  confirmAddToFriends,
  addToFriends,
  removeFromFriends,
} from '../store/user/user.action';
import { convertToFormData } from '../services/helper';

export const useFriend = id => {
  const buf = useSelector(state => state.user.users[id]);
  const [userDataa, setUserData] = useState(buf);
  const [userDataWasChange, setUserDataWasChange] = useState(false);

  console.log('userDataa', userDataa);
  console.log('bufbufbuf', buf);

  useEffect(() => {
    if (!userDataa) {
      getProfile(id)
        .then(response => {
          setUserData({ id, ...response.data.data });
        })
        .catch(error => console.log('error', error));
    }
  }, [id, userDataa, userDataWasChange]);

  useEffect(() => {
    if (userDataWasChange) {
      setUserData({ id, ...buf });
      setUserDataWasChange(false);
    }
  }, [buf, id, userDataWasChange]);

  const handleAddToFriends = () => {
    addFriend(convertToFormData({ friend_id: id }))
      .then(response => {
        if (response.data.success) {
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleConfirmFriends = () => {
    confirmFriend(convertToFormData({ user_id: id }))
      .then(response => {
        if (response.data.success) {
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleRemoveFromFriends = () => {
    removeFriend(convertToFormData({ user_id: userDataa.id }))
      .then(response => {
        if (response.data.success) {
          setUserDataWasChange(true);
        }
      })
      .catch(error => console.log('error', error));
  };

  return {
    handleAddToFriends,
    handleConfirmFriends,
    handleRemoveFromFriends,
    userDataa,
  };
};
