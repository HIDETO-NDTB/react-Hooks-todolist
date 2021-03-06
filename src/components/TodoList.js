import React, { useContext } from 'react';
import Todo from './Todo';
import AppContext from '../contexts/AppContext';

const TodoList = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="todos-list">
      {state.map(todo => (
        <div className="todo-list" key={todo.id} >
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList