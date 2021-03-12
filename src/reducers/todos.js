import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_ISDONE,
  TOGGLE_EDITMODE,
  UPDATE_TODO,
  CANCEL_UPDATE,
  CHANGE_TODO_ORDER,
  TOGGLE_EDITDATE,
  UPDATE_EXPECT_DATE,
  CANCEL_UPDATE_EXPECT_DATE,
  ADD_ISDONE_TODOS,
} from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      const todo = {
        id,
        name: action.name,
        isDone: false,
        editMode: false,
        orderNo: id,
        expectDate: "日時入力",
        editDate: false,
      };
      return [...state, todo];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO_ISDONE:
      const toggleIsDoneIndex = state.findIndex((v) => v.id === action.id);
      state[toggleIsDoneIndex].isDone = !action.isDone;
      return [...state];
    case TOGGLE_EDITMODE:
      const toggleEditModeIndex = state.findIndex((v) => v.id === action.id);
      state[toggleEditModeIndex].editMode = true;
      return [...state];
    case UPDATE_TODO:
      const updateTodoIndex = state.findIndex((v) => v.id === action.id);
      state[updateTodoIndex].name = action.name;
      return [...state];
    case CANCEL_UPDATE:
      const cancelUpdateIndex = state.findIndex((v) => v.id === action.id);
      state[cancelUpdateIndex].editMode = false;
      return [...state];
    case CHANGE_TODO_ORDER:
      const changeTodoOrderIndex = state.findIndex((v) => v.id === action.id);
      if (changeTodoOrderIndex !== -1) {
        state[changeTodoOrderIndex].orderNo = action.orderNo;
      }
      return [...state];
    case TOGGLE_EDITDATE:
      const toggleEditDateIndex = state.findIndex((v) => v.id === action.id);
      if (toggleEditDateIndex !== -1) {
        state[toggleEditDateIndex].editDate = true;
      }
      return [...state];
    case UPDATE_EXPECT_DATE:
      const updateExpectDateIndex = state.findIndex((v) => v.id === action.id);
      if (updateExpectDateIndex !== -1) {
        state[updateExpectDateIndex].expectDate = action.expectDate;
      }
      return [...state];
    case CANCEL_UPDATE_EXPECT_DATE:
      const cancelUpdateDateIndex = state.findIndex((v) => v.id === action.id);
      if (cancelUpdateDateIndex !== -1) {
        state[cancelUpdateDateIndex].editDate = false;
      }
      return [...state];
    case ADD_ISDONE_TODOS:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
