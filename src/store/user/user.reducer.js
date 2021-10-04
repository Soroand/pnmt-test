import { handleActions } from 'redux-actions';
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

const initialState = {
  myProfile: {},
  users: {},
};

export default handleActions(
  {
    [MY_PROFILE + COMPLETE]: (state, { payload }) => {
      return {
        ...state,
        myProfile: payload,
      };
    },
    [PROFILE + COMPLETE]: (state, { payload }) => ({
      ...state,
      users: {
        ...state.users,
        [payload.id]: payload,
      },
    }),
    [FRIENDS + COMPLETE]: (state, { payload }) => {
      let users = {};
      payload.forEach(item => {
        users[item.id] = {
          ...item,
          friendshipStatus: 'friend',
        };
      });
      return {
        ...state,
        users: {
          ...state.users,
          ...users,
        },
      };
    },
    [REQUEST + FRIENDS + COMPLETE]: (state, { payload }) => {
      let requestedUsers = {};
      payload.forEach(item => {
        requestedUsers[item.id] = {
          ...item,
          friendshipStatus: 'pending',
        };
      });
      return {
        ...state,
        users: {
          ...state.users,
          ...requestedUsers,
        },
      };
    },
    [ADD + FRIENDS + COMPLETE]: (state, { payload }) => ({
      ...state,
      users: {
        ...state.users,
        [payload.id]: {
          ...state.users[payload.id],
          friendshipStatus: 'requested',
        },
      },
    }),
    [CONFIRM + FRIENDS + COMPLETE]: (state, { payload }) => {
      const newFriend = { id: payload.id, name: payload.fullName };
      const result = [...state.myProfile.friends, newFriend];

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          friends: result,
        },
        users: {
          ...state.users,
          [payload.id]: {
            ...state.users[payload.id],
            friendshipStatus: 'friend',
          },
        },
      };
    },
    [REMOVE + FRIENDS + COMPLETE]: (state, { payload }) => {
      const removedFriend = payload.id;
      const result = state.myProfile.friends.filter(
        item => item.id !== removedFriend,
      );

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          friends: result,
        },
        users: {
          ...state.users,
          [payload.id]: {
            ...state.users[payload.id],
            friendshipStatus: 'notFriend',
          },
        },
      };
    },

    [MY_PROFILE + ADD + GAME]: (state, { payload }) => {
      const game = payload.isCreatetedGame
        ? payload.game
        : {
            ...payload.game,
            players: [...payload.game.players, state.myProfile],
            countPlayers: payload.game.countPlayers - 1,
          };

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          games: [...state.myProfile.games, game],
        },
      };
    },

    [MY_PROFILE + REMOVE + GAME]: (state, { payload }) => {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          games: state.myProfile.games.filter(i => i.id !== payload.gameId),
        },
      };
    },
    [MY_PROFILE + GAME + PAST]: (state, { payload }) => {
      console.log('PAST REDUCER FIRED', payload);
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          pastGames: [...state.myProfile.games, ...payload],
        },
      };
    },

    [MY_PROFILE + REMOVE + PLAYER + GAME]: (state, { payload }) => {
      const players = payload.game.players.filter(
        i => payload.players.filter(p => p === i.id).length === 0,
      );

      // payload.game.players.filter(i => {
      //   console.log('i', i);
      //   console.log('length', payload.players.filter(p => p === i.id).length);
      //   return (
      //     payload.players.filter(p => {
      //       console.log('p', p);
      //       console.log('i.id', i.id);
      //       return p === i.id;
      //     }).length > 0
      //   );
      // });

      const changedGame = {
        ...payload.game,
        players,
        countPlayers: payload.game.countPlayers + payload.players.length,
      };

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          games: state.myProfile.games.map(item =>
            item.id === changedGame.id ? changedGame : item,
          ),
        },
      };
    },

    [ADD + JOIN + GAME + COMPLETE]: (state, { payload }) => {
      const game = {
        ...payload.game,
        players: [...payload.game.players, payload.player],
        countPlayers: payload.game.countPlayers - 1,
        joinRequests: payload.game.joinRequests.filter(
          i => i.id !== payload.player.id,
        ),
      };

      const gameList = state.myProfile.games?.filter(
        i => i.id !== payload.game.id,
      );

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          games: [...gameList, game],
        },
      };
    },

    [REMOVE + JOIN + GAME + COMPLETE]: (state, { payload }) => {
      const game = {
        ...payload.game,
        joinRequests: payload.game.joinRequests.filter(
          i => i.id !== payload.player.id,
        ),
      };

      const gameList = state.myProfile.games?.filter(
        i => i.id !== payload.game.id,
      );

      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          games: [...gameList, game],
        },
      };
    },

    [MY_PROFILE + RESET + COMPLETE]: () => ({
      myProfile: {},
      users: {},
    }),
  },
  initialState,
);
