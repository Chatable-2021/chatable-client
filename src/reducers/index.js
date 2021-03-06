import { combineReducers } from 'redux';
import rooms from './roomReducer/roomReducer';
import messages from './chatReducer/chatReducer';
import lightDark from './lightDarkReducer/lightDarkReducer';

export default combineReducers({
  rooms,
  messages,
  lightDark,
});
