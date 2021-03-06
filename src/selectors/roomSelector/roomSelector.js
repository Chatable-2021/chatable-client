export const getRooms = state => state.rooms.rooms;
export const getSelectedRoom = state => state?.rooms?.selectedRoom;
export const getRoomById = id => state =>
  state.rooms.rooms.filter(room => room.id === id)[0];
