import { combineReducers } from 'redux';
import { linkReducer } from './linkReducer';

export default combineReducers({
  link: linkReducer
});
