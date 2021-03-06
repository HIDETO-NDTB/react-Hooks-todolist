import React, { useReducer, useEffect } from "react";
import reducer from "../reducers";
import CreateTodo from "./views/CreateTodo";
import TodoList from "./views/todoList/TodoList";
import SearchText from "./views/SearchText";
import IsDoneTodoList from "./views/isDoneTodoList/IsDoneTodoList";
import AppContext from "../contexts/AppContext";

const App = () => {
  const APP_KEY = "todoList-App";
  const localStorageState = localStorage.getItem(APP_KEY);

  const initialState = localStorageState
    ? JSON.parse(localStorageState)
    : {
        todos: [],
        isDoneTodos: [],
        searchText: [],
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <h1 className="app-title">TODOS</h1>
      <CreateTodo />
      <SearchText />
      <TodoList />
      <IsDoneTodoList />
    </AppContext.Provider>
  );
};

export default App;
