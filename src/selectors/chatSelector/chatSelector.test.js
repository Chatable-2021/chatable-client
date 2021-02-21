import { getMessages } from './chatSelector';

describe('chat selector', () => {
  it('returns a list of messages by room id from state', () => {
    const state = {
      1: [
        {
          id: 1,
          text: 'hello',
        },
        {
          id: 2,
          text: 'goodbye',
        },
      ],
    };

    const messages = getMessages(1)(state);

    expect(messages).toEqual([
      {
        id: 1,
        text: 'hello',
      },
      {
        id: 2,
        text: 'goodbye',
      },
    ]);
  });
});
