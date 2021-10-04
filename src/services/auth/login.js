import axios from 'axios';

export function loginWithPhoneAndPassword(data) {
  return axios.post('/auth/login/', data);
}
