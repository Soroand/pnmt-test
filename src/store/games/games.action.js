import { createAction } from 'redux-actions';

import {
  GAMES,
  GAME,
  COMPLETE,
  INVITE,
  DECLINE,
  CONFIRM,
  RESET,
  ADD,
  PLAYER,
  JOIN,
  REQUESTS,
  DELETE,
} from '../contants';

export const getGamesList = createAction(GAMES + COMPLETE);
export const getGameDetail = createAction(GAME + COMPLETE);
export const getConfirmGames = createAction(CONFIRM + GAMES + COMPLETE);
export const getInviteGames = createAction(INVITE + GAMES + COMPLETE);
export const declineGame = createAction(DECLINE + GAME + COMPLETE);
export const confirmGame = createAction(CONFIRM + GAME + COMPLETE);
export const inviteGame = createAction(INVITE + GAME + COMPLETE);
export const addJoinedPlayer = createAction(ADD + GAME + PLAYER + COMPLETE);
export const resetGameInfo = createAction(GAME + RESET + COMPLETE);

export const getMyJoinRequests = createAction(
  JOIN + REQUESTS + GAMES + COMPLETE,
);
export const addToJoinRequests = createAction(ADD + JOIN + REQUESTS);

export const declineJoinGame = createAction(DECLINE + JOIN + GAME + COMPLETE);
export const confirmJoinGame = createAction(CONFIRM + JOIN + GAME + COMPLETE);

export const deletePlayerInGame = createAction(
  DELETE + GAME + PLAYER + COMPLETE,
);
