import { getRooms } from './roomSelector';

describe('room selector test', () => {
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
});
