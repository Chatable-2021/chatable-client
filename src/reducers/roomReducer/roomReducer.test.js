import reducer from './roomReducer';
import { setRooms } from '../../actions/roomActions/roomActions';

describe('room reducer', () => {
  it('should return default state if no case', () => {
    const state = {
      rooms: [],
    };

    const action = setRooms([]);

    const results = reducer(state, action);

    expect(results).toEqual(state);
  });
});
