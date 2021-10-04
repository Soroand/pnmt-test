import { createAction } from 'redux-actions';

import {
  MY_PROFILE,
  PROFILE,
  FRIENDS,
  COMPLETE,
  REQUEST,
  ADD,
  REMOVE,
  CONFIRM,
  RESET,
  GAME,
  JOIN,
  PLAYER,
  PAST,
} from '../contants';

export const getMyProfileComplete = createAction(MY_PROFILE + COMPLETE);
export const getProfileComplete = createAction(PROFILE + COMPLETE);
export const getFriendsListComplete = createAction(FRIENDS + COMPLETE);
export const confirmAddToFriends = createAction(CONFIRM + FRIENDS + COMPLETE);
export const requestFriendship = createAction(REQUEST + FRIENDS + COMPLETE);
export const addToFriends = createAction(ADD + FRIENDS + COMPLETE);
export const removeFromFriends = createAction(REMOVE + FRIENDS + COMPLETE);
export const addGameMyProfile = createAction(MY_PROFILE + ADD + GAME);
export const resetUserInfo = createAction(MY_PROFILE + RESET + COMPLETE);
export const getMyPassedGames = createAction(MY_PROFILE + GAME + PAST);

export const addJoinedPlayerToMyProfile = createAction(
  ADD + JOIN + GAME + COMPLETE,
);

export const declineJoinedPlayerInMyProfile = createAction(
  REMOVE + JOIN + GAME + COMPLETE,
);

export const deleteGameInProfile = createAction(MY_PROFILE + REMOVE + GAME);

export const deletePLayersInGameInProfile = createAction(
  MY_PROFILE + REMOVE + PLAYER + GAME,
);
