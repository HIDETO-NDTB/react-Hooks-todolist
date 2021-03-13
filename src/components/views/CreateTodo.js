import React, { useState, useContext } from "react";
import { ADD_TODO } from "../../actions";
import AppContext from "../../contexts/AppContext";

const CreateTodo = () => {
  const [name, setName] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      name,
    });
    setName("");
  };
  return (
    <form className="add-todo-form">
      <input
        className="add-todo-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className="btn add-todo-button"
        onClick={handleAddTodo}
        disabled={!name.length}
      >
        todo作成
      </button>
    </form>
  );
};

export default CreateTodo;
