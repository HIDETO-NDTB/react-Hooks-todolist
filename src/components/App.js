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

  return (
    <>
      <h1 className="app-title">TODOS</h1>
      <form className="add-todo-form">
        <input className="add-todo-input" onChange={e => setName(e.target.value)} value={name} />
        <button className="add-todo-button" onClick={handleAddTodo}>todo作成</button>
      </form>
      <div className="todos-list">
      {state.map(todo => (
        <div className="todo-list" key={todo.id}>
          {todo.isDone ? (
            <i className="far fa-check-square" aria-hidden="true" />
          ) : (
            <i className="far fa-square" aria-hidden="true" />
          )}
          <p className="todo-text">{todo.name}</p>
        <i className="fas fa-trash-alt" aria-hidden="true" />
        </div>
      ))}
      </div>
    </>
  );
}

export default App;