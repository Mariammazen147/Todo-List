import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new Task"
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
