import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const TodoForm = () => {
  const [titleTodo, setTitleTodo] = useState("");

  const changeTitle = (event) => {
    setTitleTodo(event.target.value);
  };

  const dispatch = useDispatch();

  const addSingleTodo = (event) => {
      event.preventDefault();
      dispatch(addTodo(titleTodo));
      setTitleTodo("");
  };

  return (
    <div onSubmit={addSingleTodo}>
      <form>
        <input type="text" value={titleTodo} onChange={changeTitle} required />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
