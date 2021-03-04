import {
  SET_ROOMS,
  SELECTED_ROOM,
} from '../../actions/roomActions/roomActions';
import { filterOutDuplicates } from '../../utility/filterOutDuplicates';

export const initialState = {
  rooms: [],
  selectedRoom: {},
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROOMS:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          ...filterOutDuplicates(state.rooms || [], action.payload),
        ],
      };
    case SELECTED_ROOM:
      return {
        ...state,
        selectedRoom: state.rooms[action.payload],
      };
    default:
      return state;
  }
}
