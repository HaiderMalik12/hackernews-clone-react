import { GET_LINKS, DELETE_LINK, ADD_LINK } from './types';
import * as API from '../../shared/http';

export const getLinks = () => async dispatch => {
  //fetch all the links from the API
  const { data } = await API.fetchLinks();
  dispatch({
    type: GET_LINKS,
    payload: data
  });
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
