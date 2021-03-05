import React, { useReducer, useState } from 'react';
import reducer from '../reducers';
import { ADD_TODO } from '../actions';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const handleAddTodo = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      name
    })
    setName('')
  }
  console.log({ state });
  return (
    <>
      <h1 className="app-title">TODOS</h1>
      <form className="add-todo-form">
        <input className="add-todo-input" onChange={e => setName(e.target.value)} value={name} />
        <button className="add-todo-button" onClick={handleAddTodo}>todo作成</button>
      </form>
    </>
  );
}

export default App;