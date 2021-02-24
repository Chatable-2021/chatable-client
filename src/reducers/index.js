import { combineReducers } from 'redux';
import rooms from './roomReducer/roomReducer';
import messages from './chatReducer/chatReducer';

export default combineReducers({
  rooms,
  messages,
});
