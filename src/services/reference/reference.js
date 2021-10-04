import axios from 'axios';

export function getLanguages() {
  return axios.get('/roster/languages/');
}
