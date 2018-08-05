import axios from 'axios';

export const ENDPOINT = 'http://localhost:1338';

export function fetchLinks() {
  return axios.get(`${ENDPOINT}/links`);
}
