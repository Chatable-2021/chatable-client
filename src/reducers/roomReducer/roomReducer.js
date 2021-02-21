import { SET_ROOMS } from '../../actions/roomActions/roomActions';
import { filterOutDuplicates } from '../../utility/filterOutDuplicates';

export const initialState = {
  rooms: [],
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
    default:
      return state;
  }
}
