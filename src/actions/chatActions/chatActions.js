export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessages = (roomId, messages) => ({
  type: SET_MESSAGE,
  payload: {
    roomId,
    messages,
  },
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message,
});
