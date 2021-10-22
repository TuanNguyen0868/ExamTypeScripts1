import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todoSelector } from "../store";
import { deleteTodo, markCompleted, editTodo } from "../store/todoSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    const toggleTodoCompleted = todId => {
      dispatch(markCompleted(todId))
    }
    const removeTodo = todoId => {
      dispatch(deleteTodo(todoId))
    }
    const editTodo = todId =>{
      dispatch(editTodo(todId))
    }

  return (
    <div className="todo-list">
      <TodoForm/>
      <h3 className="title-name">List Todo !</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
          <label onChange={editTodo}>{todo.title}</label>
          <input type="checkbox" checked={todo.completed} onChange={toggleTodoCompleted.bind(this, todo.id)}/>
          <button onClick={removeTodo.bind(this, todo.id)}>Delete</button>
          <button onClick={editTodo.bind(this, todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
