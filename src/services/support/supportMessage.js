import axios from 'axios';

export function sendFeedback(data) {
  return axios.post('/support/add-message/', data);
}
