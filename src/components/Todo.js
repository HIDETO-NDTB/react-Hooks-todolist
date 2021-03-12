import React, { useState, useContext } from "react";
import { CANCEL_UPDATE, TOGGLE_EDITMODE, UPDATE_TODO } from "../actions";
import AppContext from "../contexts/AppContext";
import InputOrder from "./InputOrder";
import ExpectDate from "./ExpectDate";
import CheckBox from "./CheckBox";
import Trash from "./Trash";

const Todo = ({ todo }) => {
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

  return (
    <>
      <div className={todo.isDone ? "todoList todo-isDone" : "todoList"}>
        <CheckBox todo={todo} />
        {todo.editMode ? (
          <input
            type="text"
            className="todo-input"
            onChange={(e) => setUpdatedName(e.target.value)}
            defaultValue={todo.name}
          />
        ) : (
          <p
            className="todo-text"
            onClick={() => handleToggleEditMode(todo.id)}
          >
            {todo.name}
          </p>
        )}
        <InputOrder todo={todo} />
        <Trash todo={todo} />
        <ExpectDate todo={todo} />
      </div>
      {todo.editMode && (
        <>
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
      )}
    </>
  );
};

export default Todo;
