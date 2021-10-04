import axios from 'axios';

export function forgotPasswordStepOne(data) {
  return axios.post('/auth/forgot-password/1/', data);
}

export function forgotPasswordStepTwo(data) {
  return axios.post('/auth/forgot-password/2/', data);
}
