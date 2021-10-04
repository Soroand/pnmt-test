import axios from 'axios';

export function friendsList() {
  return axios.get('/user/friends/');
}

export function friendRequestsList() {
  return axios.get('/friendship-suggestions/tome/');
}

export function friendMyRequestsList() {
  return axios.get('/friendship-suggestions/my/');
}

export function addFriend(id) {
  return axios.post('/user/add-friend/', id);
}

export function confirmFriend(id) {
  return axios.post('/user/confirm-friendship/', id);
}

export function removeFriend(id) {
  return axios.post('/user/remove-friendship/', id);
}
