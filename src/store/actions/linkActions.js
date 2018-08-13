import {
  GET_LINKS,
  DELETE_LINK,
  ADD_LINK,
  GET_LINK,
  UPDATE_LINK
} from './types';
import * as API from '../../shared/http';

export const getLinks = () => async dispatch => {
  const { data } = await API.fetchLinks();
  dispatch({
    type: GET_LINKS,
    payload: data
  });
};
export const getLink = id => async dispatch => {
  const { data } = await API.getLinkById(id);
  dispatch({
    type: GET_LINK,
    payload: data
  });
};
export const deleteLink = id => async dispatch => {
  await API.deleteLink(id);
  dispatch({
    type: DELETE_LINK,
    payload: id
  });
};
export const addLink = link => async dispatch => {
  const { data } = await API.createLink(link);
  dispatch({
    type: ADD_LINK,
    payload: data
  });
};
export const updateLink = (id, link) => async dispatch => {
  const { data } = await API.updateLink(id, link);
  dispatch({
    type: UPDATE_LINK,
    payload: data
  });
};
