import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import ToDos from "../todos/todos";
import styles from "./dashboard.module.css";

const Dashboard = (props) => {
  const history = useHistory();
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, { id: Date.now(), todo }]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, {history.location.state.user} :)</h1>
      <p className={styles.sub}>What will you do?</p>
      <ToDos onAdd={handleAdd} />
      <div className={styles.todos}>
        {todos.map((todo) => (
          <p key={todo.id}>{todo.todo}</p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
