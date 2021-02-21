import { setMessages, SET_MESSAGE } from './chatActions';

describe('chat actions', () => {
  it('sets messages with setMessages action creator', () => {
    const arr = [
      {
        id: 1,
        text: 'hello',
      },
      {
        id: 2,
        text: 'hello',
      },
    ];

    const action = setMessages(1, arr);

    expect(action).toEqual({
      type: SET_MESSAGE,
      payload: {
        roomId: 1,
        messages: [
          {
            id: 1,
            text: 'hello',
          },
          {
            id: 2,
            text: 'hello',
          },
        ],
      },
    });
  });
});
