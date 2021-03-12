import {
  ADD_ISDONE_TODOS,
  TOGGLE_ISDONE_EDITMODE,
  CANCEL_UPDATE_ISDONE,
  UPDATE_ISDONE_TODO,
  DELETE_ISDONE_TODO,
  CHANGE_TODO_ORDER,
  TOGGLE_EDITDATE,
  UPDATE_EXPECT_DATE,
  CANCEL_UPDATE_EXPECT_DATE,
} from "../actions";

const isDoneTodos = (state = [], action) => {
  switch (action.type) {
    case ADD_ISDONE_TODOS:
      const length = state.length;
      const id = length ? state[length - 1].id + 1 : 1001;
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
    default:
      return state;
  }
};

export default isDoneTodos;
