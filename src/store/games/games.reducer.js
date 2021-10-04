import { handleActions } from 'redux-actions';
import {
  GAMES,
  GAME,
  COMPLETE,
  INVITE,
  CONFIRM,
  DECLINE,
  RESET,
  ADD,
  PLAYER,
  JOIN,
  REQUESTS,
  DELETE,
} from '../contants';

const initialState = {
  games: {
    list: null,
  },
  game: {},
};

export default handleActions(
  {
    [GAMES + COMPLETE]: (state = initialState, { payload }) => ({
      ...state,
      games: {
        ...state.games,
        empty: false,
        loading: false,
        list: payload,
      },
    }),
    [GAME + COMPLETE]: (state, { payload }) => ({
      ...state,
      game: {
        ...state.game,
        [payload.id]: payload,
      },
    }),
    [CONFIRM + GAME + COMPLETE]: (state, { payload }) => {
      const updatedGame = {
        ...payload.game,
        inviteStatus: 'confirm',
        players: [...payload.game.players, payload.myProfile],
        countPlayers: payload.game.countPlayers - 1,
      };

      const updatedList = [
        {
          ...state.games.list[0],
          games: state.games.list[0].games.map(item =>
            item.id === payload.game.id ? updatedGame : item,
          ),
        },
      ];

      return {
        ...state,
        games: {
          ...state.games,
          list: updatedList,
        },
        game: {
          ...state.game,
          [payload.game.id]: updatedGame,
        },
      };
    },
    [INVITE + GAMES + COMPLETE]: (state, { payload }) => {
      let invateGames = {};
      payload.forEach(item => {
        invateGames[item.id] = {
          ...item,
          inviteStatus: 'invite',
        };
      });
      return {
        ...state,
        game: {
          ...state.game,
          ...invateGames,
        },
      };
    },

    [JOIN + REQUESTS + GAMES + COMPLETE]: (state, { payload }) => {
      let joinRequestsGames = {};
      payload.forEach(item => {
        joinRequestsGames[item.id] = {
          ...item,
          joinRequest: true,
        };
      });
      return {
        ...state,
        game: {
          ...state.game,
          ...joinRequestsGames,
        },
      };
    },

    [DECLINE + GAME + COMPLETE]: (state, { payload }) => ({
      ...state,
      game: {
        ...state.game,
        [payload.id]: {
          ...payload,
          inviteStatus: 'notInvite',
        },
      },
    }),
    [INVITE + GAME + COMPLETE]: (state, { payload }) => ({
      ...state,
      game: {
        ...state.game,
        [payload.gameId]: {
          ...state.game[payload.gameId],
          invitedPlayers: [
            ...state.game[payload.gameId].invitedPlayers,
            payload.player,
          ],
        },
      },
    }),
    [ADD + GAME + PLAYER + COMPLETE]: (state, { payload }) => {
      const joinedGame = state.games.list[0].games.filter(
        i => i.id === payload.game.id,
      )[0];

      const updatedGame = {
        ...joinedGame,
        players: [...joinedGame.players, payload.player],
        countPlayers: payload.game.countPlayers - 1,
      };

      const updatedList = [
        {
          ...state.games.list[0],
          games: state.games.list[0].games.map(item =>
            item.id === payload.game.id ? updatedGame : item,
          ),
        },
      ];

      // если присоединяемся к игре из экрана самой игры, то обновляем и state.game
      // если присоединяемся к игре из главной, то state.game не определен и обновлять его не нужно
      if (!!state.game[payload.game.id]) {
        return {
          ...state,
          games: {
            ...state.games,
            list: updatedList,
          },
          game: {
            ...state.game,
            [payload.game.id]: updatedGame,
          },
        };
      } else {
        return {
          ...state,
          games: {
            ...state.games,
            list: updatedList,
          },
        };
      }
    },

    [DELETE + GAME + PLAYER + COMPLETE]: (state, { payload }) => {
      const selectedGame = state.games.list[0].games.filter(
        i => i.id === payload.game.id,
      )[0];

      const updatedGame = {
        ...selectedGame,
        players: selectedGame.players.filter(
          i => payload.players.filter(p => p === i.id).length === 0,
        ),
        countPlayers: payload.game.countPlayers + payload.players.length,
      };

      console.log('updatedGame', updatedGame);

      return {
        ...state,
        game: {
          ...state.game,
          [payload.game.id]: updatedGame,
        },
      };
    },

    [ADD + JOIN + REQUESTS]: (state, { payload }) => {
      const joinedGame = state.games.list[0].games.filter(
        i => i.id === payload.game.id,
      )[0];

      const updatedGame = {
        ...joinedGame,
        joinRequests: [...joinedGame.joinRequests, payload.player],
      };

      const updatedList = [
        {
          ...state.games.list[0],
          games: state.games.list[0].games.map(item =>
            item.id === payload.game.id ? updatedGame : item,
          ),
        },
      ];

      console.log('updatedGame', updatedGame);

      // если присоединяемся к игре из экрана самой игры, то обновляем и state.game
      // если присоединяемся к игре из главной, то state.game не определен и обновлять его не нужно
      if (!!state.game[payload.game.id]) {
        return {
          ...state,
          games: {
            ...state.games,
            list: updatedList,
          },
          game: {
            ...state.game,
            [payload.game.id]: updatedGame,
          },
        };
      } else {
        return {
          ...state,
          games: {
            ...state.games,
            list: updatedList,
          },
        };
      }
    },

    [CONFIRM + JOIN + GAME + COMPLETE]: (state, { payload }) => {
      const updatedGame = {
        ...payload.game,
        players: [...payload.game.players, payload.player],
        countPlayers: payload.game.countPlayers - 1,
        joinRequests: payload.game.joinRequests.filter(
          i => i.id !== payload.player.id,
        ),
      };

      const updatedList = [
        {
          ...state.games.list[0],
          games: state.games.list[0].games.map(item =>
            item.id === payload.game.id ? updatedGame : item,
          ),
        },
      ];

      return {
        ...state,
        games: {
          ...state.games,
          list: updatedList,
        },
        game: {
          ...state.game,
          [payload.game.id]: updatedGame,
        },
      };
    },

    [GAME + RESET + COMPLETE]: () => ({
      games: {
        empty: false,
        loading: true,
        list: null,
      },
      game: {},
    }),
  },
  initialState,
);
