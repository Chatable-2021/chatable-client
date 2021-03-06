import { getLightOrDark } from './lightDarkSelector';

describe('light dark selector', () => {
  it('returns a boolean from light dark state', () => {
    const state = {
      lightDark: {
        lightOrDark: true,
      },
    };

    const result = getLightOrDark(state);

    expect(result).toEqual(true);
  });
});
