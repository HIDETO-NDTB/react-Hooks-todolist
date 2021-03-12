import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import {
  TOGGLE_ISDONE_EDITMODE,
  UPDATE_ISDONE_TODO,
  CANCEL_UPDATE_ISDONE,
} from "../actions";
import InputOrder from "./InputOrder";
import ExpectDate from "./ExpectDate";
import Trash from "./Trash";

const IsDoneTodoList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [updatedIsDoneName, setUpdatedIsDoneName] = useState("");

  const handleToggleIsDoneEditMode = (id) => {
    dispatch({
      type: TOGGLE_ISDONE_EDITMODE,
      id,
    });
  };
  const handleUpdateIsDoneTodo = (id) => {
    dispatch({
      type: UPDATE_ISDONE_TODO,
      id,
      name: updatedIsDoneName,
    });
    const updateIsDoneTodoIndex = state.isDoneTodos.findIndex(
      (v) => v.id === id
    );
    state.isDoneTodos[updateIsDoneTodoIndex].editMode = false;
    setUpdatedIsDoneName("");
  };
  const handleCancelUpdateIsDone = (id) => {
    dispatch({
      type: CANCEL_UPDATE_ISDONE,
      id,
    });
  };

  state.isDoneTodos.sort((a, b) => {
    return a.orderNo - b.orderNo;
  });

  return (
    <div className="todos-list">
      <h4 className="section-title">処理済みTodo 一覧</h4>
      {state.isDoneTodos.map((todo) => (
        <div className="todo-list" key={todo.id}>
          {todo.editMode ? (
            <input
              type="text"
              className="todo-input"
              onChange={(e) => setUpdatedIsDoneName(e.target.value)}
              defaultValue={todo.name}
            />
          ) : (
            <p
              className="todo-text"
              onClick={() => handleToggleIsDoneEditMode(todo.id)}
            >
              {todo.name}
            </p>
          )}
          <Trash todo={todo} />
          {todo.editMode && (
            <>
              <button
                className="btn update-todo-button"
                onClick={() => handleUpdateIsDoneTodo(todo.id)}
                disabled={!updatedIsDoneName.length}
              >
                todo修正
              </button>
              <button
                className="btn cancel-update-button"
                onClick={() => handleCancelUpdateIsDone(todo.id)}
              >
                キャンセル
              </button>
            </>
          )}
          <InputOrder todo={todo} />
          <ExpectDate todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default IsDoneTodoList;
