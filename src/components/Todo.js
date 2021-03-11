import React, { useState, useContext } from "react";
import {
  CANCEL_UPDATE,
  DELETE_TODO,
  TOGGLE_EDITMODE,
  TOGGLE_TODO_ISDONE,
  UPDATE_TODO,
} from "../actions";
import AppContext from "../contexts/AppContext";
import InputOrder from "./InputOrder";
import ExpectDate from "./ExpectDate";

const Todo = ({ todo }) => {
  const [updatedName, setUpdatedName] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleDeleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      id,
    });
  };
  const handleToggleIsDone = (id, isDone) => {
    dispatch({
      type: TOGGLE_TODO_ISDONE,
      id,
      isDone,
    });
  };
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
      name: { updatedName },
      orderNo: todo.orderNo,
      expectDate: todo.expectDate,
      editDate: todo.editDate,
    });
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
        {todo.isDone ? (
          <i
            className="far fa-check-square"
            aria-hidden="true"
            onClick={() => handleToggleIsDone(todo.id, todo.isDone)}
          />
        ) : (
          <i
            className="far fa-square"
            aria-hidden="true"
            onClick={() => handleToggleIsDone(todo.id, todo.isDone)}
          />
        )}
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
        <i
          className="fas fa-trash-alt"
          aria-hidden="true"
          onClick={() => handleDeleteTodo(todo.id)}
        />
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
