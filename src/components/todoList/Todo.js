import React from "react";
import InputOrder from "../parts/InputOrder";
import ExpectDate from "../parts/ExpectDate";
import CheckBox from "../parts/CheckBox";
import Trash from "../parts/Trash";
import TodoName from "../parts/TodoName";

const Todo = ({ todo }) => {
  return (
    <>
      <div className={todo.isDone ? "todoList todo-isDone" : "todoList"}>
        <CheckBox todo={todo} />
        <TodoName todo={todo} />
        <InputOrder todo={todo} />
        <Trash todo={todo} />
        <ExpectDate todo={todo} />
      </div>
    </>
  );
};

export default Todo;
