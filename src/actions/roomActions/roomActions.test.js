import {
  selectedRoom,
  SELECTED_ROOM,
  setRooms,
  SET_ROOMS,
} from './roomActions';

describe('rooms actions', () => {
  it('sets rooms with setRooms action creator', () => {
    const action = setRooms([
      {
        id: 1,
        name: 'test room',
        userId: 2,
      },
      {
        id: 2,
        name: 'different room',
        userId: 3,
      },
    ]);

    expect(action).toEqual({
      type: SET_ROOMS,
      payload: [
        {
          id: 1,
          name: 'test room',
          userId: 2,
        },
        {
          id: 2,
          name: 'different room',
          userId: 3,
        },
      ],
    });
  });

  it('creates a selectedRoom action with the index as its payload', () => {
    const action = selectedRoom(1);

    expect(action).toEqual({
      type: SELECTED_ROOM,
      payload: 1,
    });
  });
});
