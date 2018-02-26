export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id // because it's really id: id (ES6 reminder)
  }
  return action;
}