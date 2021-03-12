import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { TOGGLE_TODO_ISDONE, ADD_ISDONE_TODOS } from "../actions";

const CheckBox = ({ todo }) => {
  const { dispatch } = useContext(AppContext);
  const handleToggleIsDone = (id, isDone) => {
    dispatch({
      type: TOGGLE_TODO_ISDONE,
      id,
      isDone,
    });
  };
  const handleMoveToIsDone = (id, name, orderNo, expectDate) => {
    dispatch({
      type: ADD_ISDONE_TODOS,
      id,
      name,
      orderNo,
      expectDate,
    });
  };

  return todo.isDone ? (
    <>
      <i
        className="far fa-check-square"
        aria-hidden="true"
        onClick={() => handleToggleIsDone(todo.id, todo.isDone)}
      />
      <button
        className="btn move-to-isDone-button"
        onClick={() =>
          handleMoveToIsDone(todo.id, todo.name, todo.orderNo, todo.expectDate)
        }
      >
        処理済みへ
      </button>
    </>
  ) : (
    <i
      className="far fa-square"
      aria-hidden="true"
      onClick={() => handleToggleIsDone(todo.id, todo.isDone)}
    />
  );
};

export default CheckBox;
