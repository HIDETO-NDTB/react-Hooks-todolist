import React, { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import IsDoneTodo from "./IsDoneTodo";

const IsDoneTodoList = () => {
  const { state } = useContext(AppContext);

  state.isDoneTodos.sort((a, b) => {
    return a.orderNo - b.orderNo;
  });

  return (
    <div className="todos-list">
      <h4 className="section-title">処理済みTodo 一覧</h4>
      {state.isDoneTodos.map((todo) => (
        <div className="todo-list" key={todo.id}>
          <IsDoneTodo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default IsDoneTodoList;
