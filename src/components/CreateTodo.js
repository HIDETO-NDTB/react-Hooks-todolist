import React, { useState } from 'react';
import { ADD_TODO } from '../actions';

const CreateTodo = ({dispatch}) => {
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
    <form className="add-todo-form">
      <input className="add-todo-input" onChange={e => setName(e.target.value)} value={name} />
      <button className="btn add-todo-button" onClick={handleAddTodo}>todo作成</button>
    </form>
  );
}

export default CreateTodo