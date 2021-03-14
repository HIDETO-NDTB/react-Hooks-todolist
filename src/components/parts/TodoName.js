import React, { useState, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { TOGGLE_EDITMODE, UPDATE_TODO, CANCEL_UPDATE } from "../../actions";

const TodoName = ({ todo }) => {
  const [updatedName, setUpdatedName] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleToggleEditMode = (id) => {
    dispatch({
      type: TOGGLE_EDITMODE,
      id,
    });
  };
  const handleUpdateTodo = (id) => {
    dispatch({
      type: UPDATE_TODO,
      id,
      name: updatedName,
    });
    todo.editMode = false;
    setUpdatedName("");
  };
  const handleCancelUpdate = (id) => {
    dispatch({
      type: CANCEL_UPDATE,
      id,
    });
  };

  return todo.editMode ? (
    <>
      <input
        type="text"
        className={
          todo.isDoneTodoList ? "todo-input isDone-todo-input" : "todo-input"
        }
        onChange={(e) => setUpdatedName(e.target.value)}
        defaultValue={todo.name}
      />
      <button
        className="btn update-todo-button"
        onClick={() => handleUpdateTodo(todo.id)}
        disabled={!updatedName.length}
      >
        todo修正
      </button>
      <button
        className="btn cancel-update-button"
        onClick={() => handleCancelUpdate(todo.id)}
      >
        キャンセル
      </button>
    </>
  ) : (
    <p
      className={
        todo.isDoneTodoList ? "todo-text isDone-todo-text" : "todo-text"
      }
      onClick={() => handleToggleEditMode(todo.id)}
    >
      {todo.name}
    </p>
  );
};

export default TodoName;
