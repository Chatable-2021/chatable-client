export const SET_ROOMS = 'SET_ROOMS';
export const setRooms = rooms => ({
  type: SET_ROOMS,
  payload: rooms,
});

export const SELECTED_ROOM = 'SELECTED_ROOM';
export const selectedRoom = index => ({
  type: SELECTED_ROOM,
  payload: index,
});
