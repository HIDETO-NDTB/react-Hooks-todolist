import React from 'react';
import Todo from './Todo';

const TodoList = ({state, dispatch}) => {

  return (
    <div className="todos-list">
      {state.map(todo => (
        <div className="todo-list" key={todo.id} >
          <Todo todo={todo} dispatch={dispatch} />
        </div>
      ))}
    </div>
  );
}

export default TodoList