import React, { useReducer, useState } from 'react';
import reducer from '../reducers';
import { ADD_TODO, CANCEL_UPDATE, DELETE_TODO, TOGGLE_EDITMODE, TOGGLE_TODO_ISDONE, UPDATE_TODO } from '../actions';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const handleAddTodo = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      name
    })
    setName('')
  }
  const handleDeleteTodo = id => {
    dispatch({
      type: DELETE_TODO,
      id
    })
  }
  const handleToggleIsDone = (id, isDone) => {
    dispatch({
      type: TOGGLE_TODO_ISDONE,
      id,
      isDone
    })
  }
  const handleToggleEditMode = (id, name, isDone) => {
    dispatch({
      type: TOGGLE_EDITMODE,
      id,
      name,
      isDone
    })
  }
  const handleUpdateTodo = id => {
    dispatch({
      type: UPDATE_TODO,
      id,
      name: {updatedName}
    })
  }
  const handleCancelUpdate = id => {
    dispatch({
      type: CANCEL_UPDATE,
      id
    })
  }

  return (
    <>
      <h1 className="app-title">TODOS</h1>
      <form className="add-todo-form">
        <input className="add-todo-input" onChange={e => setName(e.target.value)} value={name} />
        <button className="btn add-todo-button" onClick={handleAddTodo}>todo作成</button>
      </form>
      <div className="todos-list">
        {state.map(todo => (
        <div className="todo-list" key={todo.id} >
          {todo.isDone ? (
            <i className="far fa-check-square" aria-hidden="true" onClick={()=> handleToggleIsDone(todo.id, todo.isDone)} />
          ) : (
            <i className="far fa-square" aria-hidden="true" onClick={()=> handleToggleIsDone(todo.id, todo.isDone)} />
          )}
          {todo.editMode ? (
            <input type="text" className="todo-input" onChange={e => setUpdatedName(e.target.value)} defaultValue={todo.name} />
          ) : (
            <p className="todo-text" onClick={()=> handleToggleEditMode(todo.id, todo.name, todo.isDone)} >{todo.name}</p>
          )}
            <i className="fas fa-trash-alt" aria-hidden="true" onClick={() => handleDeleteTodo(todo.id)} />
            {todo.editMode && (
              <>
                <button className="btn update-todo-button" onClick={()=> handleUpdateTodo(todo.id)} >todo修正</button>
                <button className="btn cancel-update-button" onClick={()=>handleCancelUpdate(todo.id)} >キャンセル</button>
              </>
            )}
              
        </div>
      ))}
      </div>
    </>
  );
}

export default App;