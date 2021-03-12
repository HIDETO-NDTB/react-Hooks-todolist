import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import {
  TOGGLE_EDITDATE,
  UPDATE_EXPECT_DATE,
  CANCEL_UPDATE_EXPECT_DATE,
} from "../actions";

const ExpectDate = ({ todo }) => {
  const { dispatch } = useContext(AppContext);
  const [expectDate, setExpectDate] = useState("");
  const handleToggleEditDate = (id) => {
    dispatch({
      type: TOGGLE_EDITDATE,
      id,
    });
  };
  const handleEditExpectDate = (id) => {
    dispatch({
      type: UPDATE_EXPECT_DATE,
      id,
      expectDate,
    });
    todo.editDate = false;
  };
  const handleCancelEditDate = (id) => {
    dispatch({
      type: CANCEL_UPDATE_EXPECT_DATE,
      id,
    });
  };
  return (
    <div className="expect-date-components">
      {todo.editDate ? (
        <input
          type="text"
          className="edit-date-input"
          defaultValue={todo.expectDate}
          onChange={(e) => setExpectDate(e.target.value)}
        />
      ) : (
        <p
          className="expect-date"
          onClick={() => handleToggleEditDate(todo.id)}
        >
          {todo.expectDate}
        </p>
      )}
      {todo.editDate ? (
        <>
          <button
            className="btn update-date-button"
            disabled={!expectDate}
            onClick={() => handleEditExpectDate(todo.id)}
          >
            日付修正
          </button>
          <button
            className="btn cancel-update-date-button"
            onClick={() => handleCancelEditDate(todo.id)}
          >
            キャンセル
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExpectDate;
