import axios from 'axios';

export function sendFeedback(data) {
  return axios.post('/reviews/add/', data);
}
