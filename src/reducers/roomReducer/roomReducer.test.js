import reducer from './roomReducer';
import { setRooms, selectedRoom } from '../../actions/roomActions/roomActions';

describe('room reducer', () => {
  it('should return default state if no case', () => {
    const state = {
      rooms: [],
      selectedRoom: {},
    };

    const action = setRooms([]);

    const result = reducer(state, action);

    expect(result).toEqual(state);
  });

  it('should handle SET_ROOMS case', () => {
    const state = {
      rooms: [],
      selectedRoom: {},
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
      selectedRoom: {},
    });
  });

  it('should handle SELECTED_ROOM case', () => {
    const state = {
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
      selectedRoom: [],
    };

    const action = selectedRoom(1);

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
      selectedRoom: {
        id: 2,
        name: 'different room',
        userId: 3,
      },
    });
  });
});
