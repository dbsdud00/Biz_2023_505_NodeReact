import { useState } from "react";

const TodoInput = (props) => {
  const { todo, setTodo, todoInput } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, content: value });
  };
  const btnClickHandler = (e) => {
    todoInput(todo.content);
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={todo.content}
        onChange={inputChangeHandler}
      />
      <button
        disabled={todo.content.length < 2}
        onClick={btnClickHandler}
        className={todo.id ? "update" : ""}
      >
        {todo.id ? "변경" : "추가"}
      </button>
    </div>
  );
};

export default TodoInput;
