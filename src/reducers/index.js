import { combineReducers } from "redux";
import todos from "./todos";
import searchText from "./searchText";
import isDoneTodos from "./isDoneTodos";

export default combineReducers({ todos, isDoneTodos, searchText });
