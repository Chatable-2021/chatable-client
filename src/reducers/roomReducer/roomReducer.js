import { SET_ROOMS } from '../../actions/roomActions/roomActions';

export const initialState = {
  rooms: [],
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROOMS:
      return {
        ...state,
        rooms: [...state.rooms, ...action.payload],
      };
    default:
      return state;
  }
}
