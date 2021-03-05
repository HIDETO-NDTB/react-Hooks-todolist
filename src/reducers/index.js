import { ADD_TODO, DELETE_TODO } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const length = state.length;
      const id = length === 0 ? 1 : (state[length - 1]).id + 1;
      const todo = { id, name: action.name, isDone: false };
      return [...state, todo]
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    default:
      return state;
  }
};

export default todos