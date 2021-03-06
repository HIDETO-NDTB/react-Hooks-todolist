import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_ISDONE } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const length = state.length;
      const id = length === 0 ? 1 : (state[length - 1]).id + 1;
      const todo = { id, name: action.name, isDone: false };
      return [...state, todo]
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    case TOGGLE_TODO_ISDONE:
      const newIsDoneState = { id: action.id, name: action.name, isDone: !action.isDone };
      const index = state.findIndex(v => v.id === action.id);
      state.splice(index, 1, newIsDoneState);
      return [...state];
    default:
      return state;
  }
};

export default todos