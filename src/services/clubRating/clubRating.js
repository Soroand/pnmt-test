import axios from 'axios';

export function clubRating(data) {
  return axios.post('/club/add-rating/', data);
}
