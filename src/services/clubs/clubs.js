import axios from 'axios';

export function getClubs(data) {
  return axios.get(`/clubs/?filter[city_name]=${data}`);
}

export function getClub(id) {
  return axios.get(`/club/` + id + '/');
}
