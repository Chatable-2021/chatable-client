import { getRooms, getSelectedRoom } from './roomSelector';

describe('room selector', () => {
  it('returns a list of rooms from state', () => {
    const state = {
      rooms: {
        rooms: [
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
      },
    };

    const rooms = getRooms(state);

    expect(rooms).toEqual([
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
  });

  it('returns selected room from state', () => {
    const state = {
      rooms: {
        selectedRoom: {
          id: 1,
          name: 'test room',
          userId: 2,
        },
      },
    };

    const result = getSelectedRoom(state);

    expect(result).toEqual({
      id: 1,
      name: 'test room',
      userId: 2,
    });
  });
});
