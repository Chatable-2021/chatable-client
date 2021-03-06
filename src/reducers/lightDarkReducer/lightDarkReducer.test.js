import reducer from './lightDarkReducer';
import { setLightDark } from '../../actions/lightDarkActions/lightDarkActions';

describe('light dark reducer', () => {
  it('should handle SET_LIGHT_DARK case', () => {
    const state = {
      lightOrDark: true,
    };

    const action = setLightDark(false);

    const result = reducer(state, action);

    expect(result).toEqual({
      lightOrDark: false,
    });
  });
});
