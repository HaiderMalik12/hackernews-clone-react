import { DELETE_LINK_TYPE } from './action_types';

export const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_LINK_TYPE:
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    default:
      return state;
  }
};
