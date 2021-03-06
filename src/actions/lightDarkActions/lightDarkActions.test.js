import { SET_LIGHT_DARK, setLightDark } from './lightDarkActions';

describe('light dark actions', () => {
  it('sets lightDark action with setLightDark action creator', () => {
    const action = setLightDark(true);

    expect(action).toEqual({
      type: SET_LIGHT_DARK,
      payload: true,
    });
  });
});
