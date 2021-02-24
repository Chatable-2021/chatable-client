import {
  ADD_MESSAGE,
  SET_MESSAGE,
} from '../../actions/chatActions/chatActions';
import { filterOutDuplicates } from '../../utility/filterOutDuplicates';

export const initialState = {};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        [action.payload.roomId]: [
          ...(state[action.payload.roomId] || []),
          ...filterOutDuplicates(
            state[action.payload.roomId] || [],
            action.payload.messages || []
          ),
        ],
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatRoomId]: [
          ...(state[action.payload.chatRoomId] || []),
          action.payload,
        ],
      };
    }
    default:
      return state;
  }
}
