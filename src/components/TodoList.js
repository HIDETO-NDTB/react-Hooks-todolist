import React, { useContext } from 'react';
import Todo from './Todo';
import AppContext from '../contexts/AppContext';

const TodoList = () => {
  const { state } = useContext(AppContext);
  
  const filterCollection = todo => {
    const regExp = new RegExp('^' + state.searchText, 'i');
    return todo.name.match(regExp)
  }

  // filterの引数に関数ilterCollectionを渡し、state.todosを絞り込む
  const data = (state.searchText) ? state.todos.filter(filterCollection) : state.todos;
  
  return (
    <div className="todos-list">
      {data.map(todo => (
        <div className="todo-list" key={todo.id} >
          <Todo todo={todo} /> 
        </div>
      ))
      }
    </div>
  );
}

export default TodoList