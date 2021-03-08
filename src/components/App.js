import React, { useReducer } from 'react';
import reducer from '../reducers';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import SearchText from './SearchText';
import AppContext from '../contexts/AppContext';

const App = () => {
  const initialState = {
    todos: [],
    searchText: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}} >
      <h1 className="app-title">TODOS</h1>
      <CreateTodo />
      <SearchText />
      <TodoList />
    </AppContext.Provider>
    
  );
}

export default App;