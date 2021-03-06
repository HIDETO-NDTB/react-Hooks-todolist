import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_ISDONE, TOGGLE_EDITMODE, UPDATE_TODO, CANCEL_UPDATE } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const length = state.length;
      const id = length === 0 ? 1 : (state[length - 1]).id + 1;
      const todo = { id, name: action.name, isDone: false, editMode: false };
      return [...state, todo]
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    case TOGGLE_TODO_ISDONE:
      // const newIsDoneState = { id: action.id, name: action.name, isDone: !action.isDone, editMode: false };
      const toggleIsDoneIndex = state.findIndex(v => v.id === action.id);
      state[toggleIsDoneIndex].isDone = !action.isDone;
      return [...state];
    case TOGGLE_EDITMODE:
      const newEditModeState = { id: action.id, name: action.name, isDone: action.isDone, editMode: true };
      const toggleEditModeIndex = state.findIndex(v => v.id === action.id);
      state.splice(toggleEditModeIndex, 1, newEditModeState);
      return [...state];
    case UPDATE_TODO:
      const newUpdatedState = { id: action.id, name: action.name.updatedName, isDone: false, editMode: false };
      const UpdeteIndex = state.findIndex(v => v.id === action.id);
      state.splice(UpdeteIndex, 1, newUpdatedState);
      return [...state];
    case CANCEL_UPDATE:
      const cancelUpdateIndex = state.findIndex(v => v.id === action.id);
      state[cancelUpdateIndex].editMode = false;
      return [...state];
    default:
      return state;
  }
};

export default todos