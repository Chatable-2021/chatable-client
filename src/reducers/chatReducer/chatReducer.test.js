import { setMessages } from '../../actions/chatActions/chatActions';
import chatReducer from './chatReducer';

describe('chat reducer', () => {
  it('returns initial state when there is no case', () => {
    const state = {};

    const action = {
      type: 'BAD_TYPE',
      payload: 'none',
    };

    const result = chatReducer(state, action);

    expect(result).toEqual({});
  });

  it('returns messages with the SET_MESSAGE case', () => {
    const state = {};

    const messages = [
      {
        id: 1,
        text: 'hello',
      },
      {
        id: 2,
        text: 'goodbye',
      },
    ];

    const action = setMessages(1, messages);

    const result = chatReducer(state, action);

    expect(result).toEqual({
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
    });
  });
});
