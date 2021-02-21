export const filterOutDuplicates = (appState, payload) => {
  const filteredItems = payload.filter(payloadItem => {
    return !appState.some(stateItem => {
      return payloadItem.id === stateItem.id;
    });
  });

  return filteredItems;
};
