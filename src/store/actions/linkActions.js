import { GET_LINKS, DELETE_LINK, ADD_LINK } from './types';

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
export const addLink = link => {
  return {
    type: ADD_LINK,
    payload: link
  };
};
