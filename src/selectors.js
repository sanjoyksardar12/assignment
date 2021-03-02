export function selectData(state, responseType) {
  return state[responseType.toLowerCase()].data;
}

export function isFetchingData(state, responseType) {
  return state[responseType.toLowerCase()].fetching;
}