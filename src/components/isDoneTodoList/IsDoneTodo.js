import React from "react";
import ExpectDate from "../parts/ExpectDate";
import TodoName from "../parts/TodoName";
import InputOrder from "../parts/InputOrder";
import Trash from "../parts/Trash";

const IsDoneTodo = ({ todo }) => {
  return (
    <>
      <ExpectDate todo={todo} />
      <TodoName todo={todo} />
      <InputOrder todo={todo} />
      <Trash todo={todo} />
    </>
  );
};

export default IsDoneTodo;
