import reducer from './roomReducer';
import { setRooms } from '../../actions/roomActions/roomActions';

describe('room reducer', () => {
  it('should return default state if no case', () => {
    const state = {
      rooms: [],
    };

    const action = setRooms([]);

    const result = reducer(state, action);

    expect(result).toEqual(state);
  });

  it('should handle SET_ROOMS case', () => {
    const state = {
      rooms: [],
    };

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

    const result = reducer(state, action);

    expect(result).toEqual({
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
    });
  });
});
