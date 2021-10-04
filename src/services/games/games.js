import axios from 'axios';

export function getGames(data) {
  return axios.get(`/games/?filter[city_name]=${data}`);
}

export function getGame(id) {
  return axios.get('/game/' + id + '/');
}

export function createGame(data) {
  return axios.post('/game/create/', data);
}

export function inviteToGame(game_id, data) {
  return axios.post(`/game/${game_id}/invite-participant/`, data);
}

export function joinToGame(data) {
  return axios.post('/game/register-participant/', data);
}

export function confirmJoinToGame(game_id, data) {
  return axios.post(`/game/${game_id}/confirm-participant/`, data);
}

export function declineJoinToGame(game_id, data) {
  return axios.post(`/game/${game_id}/decline-participant/`, data);
}

export function deleteGame(game_id) {
  return axios.post(`/game/${game_id}/delete/`);
}

export function leaveGame(game_id) {
  return axios.post(`/game/${game_id}/leave/`);
}

export function deletePlayers(game_id, data) {
  console.log('peap', data);
  return axios.post(`/game/${game_id}/delete-participant/`, data);
}
