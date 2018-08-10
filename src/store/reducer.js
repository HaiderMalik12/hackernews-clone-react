import {
  DELETE_LINK_TYPE,
  ERROR_TYPE,
  ADD_LINK_TYPE,
  EDIT_LINK_TYPE
} from './action_types';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_LINK_TYPE:
      return {
        ...state,
        links: [action.payload, ...state.links]
      };
    case EDIT_LINK_TYPE:
      return {
        ...state,
        links: state.links.map(link => {
          return link.id === action.payload.id ? action.payload : link;
        })
      };
    case DELETE_LINK_TYPE:
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    case ERROR_TYPE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
