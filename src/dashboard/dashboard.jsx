import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import ToDos from "../todos/todos";
import styles from "./dashboard.module.css";
import TodosEdit from "../todosEdit/todosEdit";

const Dashboard = (props) => {
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = (todo) => {
    setTodos((todos) => [{ id: Date.now(), todo }, ...todos]);
    localStorage.setItem("todos", todos);
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleEditText = (value) => {
    setEditText(value);
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        if (editText !== "") {
          return { ...todo, todo: editText };
        }
      }
      return todo;
    });
    // setTodos((todos) => {
    //   todos.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, todo: editText };
    //     }
    //     return todo;
    //   });
    // });
    setTodos(updated);
    setEdit(null);
    setEditText("");
  };

  // logcalstorage에 저장하려면 json 객체(지금의 todos) -> string 객체로 변경
  // localstorage에서 저장된걸 브라우저에 띄울려면 string 객체(localstorage에 저장된 todos) -> json객체로 변경
  // useEffect에서 localstorage data가져오는 걸(getItem) 먼저 정의 해줘야함!!!
  useEffect(() => {
    const data = localStorage.getItem("todos");
    const parsedData = JSON.parse(data);

    if (parsedData) {
      setTodos(parsedData);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem("todos", data);
  }, [todos]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, {history.location.state.user} :)</h1>
      <p className={styles.sub}>What will you do?</p>
      <ToDos onAdd={handleAdd} />
      <TodosEdit
        todos={todos}
        edit={edit}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onEditText={handleEditText}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Dashboard;
