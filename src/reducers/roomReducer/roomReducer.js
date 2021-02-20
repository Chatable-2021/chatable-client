import { SET_ROOMS } from '../../actions/roomActions/roomActions';

export const initialState = {
  rooms: [],
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
