import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { CHANGE_TODO_ORDER } from "../actions";

const InputOrder = (todo) => {
  const { dispatch } = useContext(AppContext);
  const [orderNo, setOrderNo] = useState("");

  const handleChangeOrderNo = () => {
    dispatch({
      type: CHANGE_TODO_ORDER,
      id: todo.todo.id,
      name: todo.todo.name,
      isDone: todo.todo.isDone,
      editMode: todo.todo.editMode,
      orderNo,
    });
  };
  return (
    <>
      <input
        className="order-no-input"
        defaultValue={todo.todo.orderNo}
        onChange={(e) => setOrderNo(e.target.value)}
        onKeyUp={handleChangeOrderNo}
      />
    </>
  );
};

export default InputOrder;
