import { SET_MESSAGE } from '../../actions/chatActions/chatActions';
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
            action.payload.messages
          ),
        ],
      };
    }
    default:
      return state;
  }
}
