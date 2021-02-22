import { addMessage, setMessages } from '../../actions/chatActions/chatActions';
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
        id: '1',
        chatRoomId: '1',
        userId: '1',
        userName: 'Zach Butler',
        messageText: 'new message',
      },
      {
        id: '2',
        chatRoomId: '1',
        userId: '2',
        userName: 'David Butler',
        messageText: 'another message',
      },
    ];

    const action = setMessages(1, messages);

    const result = chatReducer(state, action);

    expect(result).toEqual({
      1: [
        {
          id: '1',
          chatRoomId: '1',
          userId: '1',
          userName: 'Zach Butler',
          messageText: 'new message',
        },
        {
          id: '2',
          chatRoomId: '1',
          userId: '2',
          userName: 'David Butler',
          messageText: 'another message',
        },
      ],
    });
  });

  it('adds new message and returns state with ADD_MESSAGE case', () => {
    const state = {};

    const message = {
      id: '1',
      chatRoomId: '2',
      userId: '3',
      userName: 'Zach Butler',
      messageText: 'new message',
    };

    const action = addMessage(message);

    const result = chatReducer(state, action);

    expect(result).toEqual({
      2: [
        {
          id: '1',
          chatRoomId: '2',
          userId: '3',
          userName: 'Zach Butler',
          messageText: 'new message',
        },
      ],
    });
  });
});
