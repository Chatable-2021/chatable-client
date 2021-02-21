export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessages = (roomId, messages) => ({
  type: SET_MESSAGE,
  payload: {
    roomId,
    messages,
  },
});
