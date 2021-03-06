import React, { useReducer } from 'react';
import reducer from '../reducers';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import AppContext from '../contexts/AppContext';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{state, dispatch}} >
      <h1 className="app-title">TODOS</h1>
      <CreateTodo />
      <TodoList />
    </AppContext.Provider>
    
  );
}

export default App;