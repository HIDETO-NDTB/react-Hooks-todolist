import {
  ADD_ISDONE_TODOS,
  TOGGLE_ISDONE_EDITMODE,
  CANCEL_UPDATE_ISDONE,
  UPDATE_ISDONE_TODO,
  DELETE_ISDONE_TODO,
} from "../actions";

const isDoneTodos = (state = [], action) => {
  switch (action.type) {
    case ADD_ISDONE_TODOS:
      const length = state.length;
      const id = length ? state[length - 1].id + 1 : 1;
      const newIsdoneTodo = {
        id,
        name: action.name,
        isDone: true,
        editMode: false,
        orderNo: action.orderNo,
        expectDate: action.expectDate,
        editDate: false,
      };
      return [...state, newIsdoneTodo];
    case TOGGLE_ISDONE_EDITMODE:
      const toggleIsDoneIndex = state.findIndex((v) => v.id === action.id);
      state[toggleIsDoneIndex].editMode = true;
      return [...state];
    case UPDATE_ISDONE_TODO:
      const updatedIsDoneTodoIndex = state.findIndex((v) => v.id === action.id);
      state[updatedIsDoneTodoIndex].name = action.name;
      return [...state];
    case CANCEL_UPDATE_ISDONE:
      const cancalUpdateIsDoneIndex = state.findIndex(
        (v) => v.id === action.id
      );
      state[cancalUpdateIsDoneIndex].editMode = false;
      return [...state];
    case DELETE_ISDONE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default isDoneTodos;
