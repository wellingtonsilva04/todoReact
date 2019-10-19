export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    case "DELETE_TODO":
      return state.filter(elem => elem.id !== action.payload.id);

    default:
      return state;
  }
}