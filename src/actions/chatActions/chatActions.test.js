import {
  addMessage,
  ADD_MESSAGE,
  setMessages,
  SET_MESSAGE,
} from './chatActions';

describe('chat actions', () => {
  it('creates a set message action with the setMessages action creator', () => {
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

    expect(action).toEqual({
      type: SET_MESSAGE,
      payload: {
        roomId: 1,
        messages: [
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
      },
    });
  });

  it('creates a add message action with the addMessage action creator', () => {
    const message = {
      id: '1',
      chatRoomId: '2',
      userId: '3',
      userName: 'Zach Butler',
      messageText: 'new message',
    };

    const action = addMessage(message);

    expect(action).toEqual({
      type: ADD_MESSAGE,
      payload: {
        id: '1',
        chatRoomId: '2',
        userId: '3',
        userName: 'Zach Butler',
        messageText: 'new message',
      },
    });
  });
});
