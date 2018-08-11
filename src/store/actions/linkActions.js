import { GET_LINKS, DELETE_LINK } from './types';

export const getLinks = () => {
  return {
    type: GET_LINKS
  };
};
export const deleteLink = id => {
  return {
    type: DELETE_LINK,
    payload: id
  };
};
