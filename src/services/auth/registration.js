import axios from 'axios';

export function registerWithPhoneAndPassword(data) {
  return axios.post('/auth/registration/1/', data);
}

export function confirmPhoneNumber(data) {
  return axios.post('/auth/registration/2/', data);
}
