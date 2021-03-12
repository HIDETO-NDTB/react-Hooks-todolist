import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { DELETE_TODO } from "../../actions";

const Trash = ({ todo }) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteTodo = (id) => {
    if (window.confirm("削除してもよろしいですか？")) {
      dispatch({
        type: DELETE_TODO,
        id,
      });
    }
  };
  return (
    <i
      className="fas fa-trash-alt"
      aria-hidden="true"
      onClick={() => handleDeleteTodo(todo.id)}
    />
  );
};

export default Trash;
