import axios from 'axios';

export function getMyProfile() {
  return axios.get('/user/profile/');
}
export function getUserProfileUpdate(id) {
  return axios.get(`/user/${id}/`);
}

export function updateMyProfile(data) {
  return axios.post('/user/profile/update/', data);
}

export function getProfile(id) {
  return axios.get('/user/profile/' + id + '/');
}

export function updateAvatar(data) {
  return axios.post('/user/profile/update-avatar/', data);
}

export function getMyInviteGames() {
  return axios.get('/user/game-invitations/');
}

export function confirmGameInvite(data) {
  return axios.post('/user/confirm-invitation/', data);
}

export function declineGameInvite(data) {
  return axios.post('/user/decline-invitation/', data);
}

export function joinToGame(data) {
  return axios.post('/user/join-game/', data);
}

export function getJoinRequests() {
  return axios.get('/user/join-requests/my/');
}

export function getPassedGames() {
  return axios.get('/user/past-games/');
}
