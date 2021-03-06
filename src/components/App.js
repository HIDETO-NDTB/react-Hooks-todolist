import React, { useReducer } from 'react';
import reducer from '../reducers';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1 className="app-title">TODOS</h1>
      <CreateTodo dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </>
  );
}

export default App;