import axios from 'axios';

export const ENDPOINT = 'http://localhost:1338';

export function fetchLinks() {
  return axios.get(`${ENDPOINT}/links`);
}
export function getLinkById(id) {
  return axios.get(`${ENDPOINT}/links/${id}`);
}
export function updateLink(id, link) {
  return axios.put(`${ENDPOINT}/links/${id}`, link);
}
export function deleteLink(id) {
  return axios.delete(`${ENDPOINT}/links/${id}`);
}

export function createLink(link) {
  return axios.post(`${ENDPOINT}/links`, link);
}
