import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import ToDos from "../todos/todos";
import styles from "./dashboard.module.css";
import TodosEdit from "../todosEdit/todosEdit";
import { FaSurprise, FaRegGrinSquint } from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import LeftMenu from "../left_menu/left_menu";
import RightMenu from "../right_menu/right_menu";

const Dashboard = (props) => {
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");
  const [leftShow, setLeftShow] = useState(false);
  const [rightShow, setRightShow] = useState(false);
  const [memoId, setMemoId] = useState(null);

  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
          return todo;
        }
        return todo;
      })
    );
  };

  const toggleLeft = () => {
    setLeftShow((leftShow) => !leftShow);
  };

  const toggleRight = () => {
    setRightShow((rightShow) => !rightShow);
  };

  const toggleStar = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.star = !todo.star;
          return todo;
        }
        return todo;
      })
    );
  };

  const toggleMemo = (id) => {
    setMemoId(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.memo = !todo.memo;
          return todo;
        }
        return todo;
      })
    );
  };

  const writeMemo = (value) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === memoId) {
          todo.memoText = value;
          return todo;
        }
        return todo;
      })
    );
  };

  const handleAdd = (todo) => {
    setTodos((todos) => [
      {
        id: Date.now(),
        todo,
        complete: false,
        star: false,
        memo: false,
        memoText: "",
      },
      ...todos,
    ]);
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
      <div className={styles.leftBtn} onClick={toggleLeft}>
        <p>See What you did!</p>
        <div className={`${styles.arrow} ${styles.btn7}`}>
          <HiOutlineArrowRight />
        </div>
      </div>
      <LeftMenu
        todos={todos}
        leftShow={leftShow}
        toggleLeft={toggleLeft}
        toggleStar={toggleStar}
        toggleMemo={toggleMemo}
        writeMemo={writeMemo}
        onDelete={handleDelete}
      />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Hello, {history.location.state.user} :)
        </h1>
        <p className={styles.sub}>What will you do?</p>
        <ToDos onAdd={handleAdd} />
        <TodosEdit
          todos={todos}
          edit={edit}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onEditText={handleEditText}
          onEdit={handleEdit}
          toggleCheck={toggleCheck}
        />
        <div className={styles.explain}>
          <div>
            <FaSurprise />
            <span className={styles.text}>oh.. You have to do that..</span>
          </div>
          <div>
            <FaRegGrinSquint />
            <span className={styles.text}>Wow~ You did it!</span>
          </div>
        </div>
      </div>
      <div className={styles.rightBtn} onClick={toggleRight}>
        <p>What is new!?</p>
        <div className={`${styles.arrow} ${styles.btn7}`}>
          <HiOutlineArrowLeft />
        </div>
      </div>
      <RightMenu rightShow={rightShow} toggleRight={toggleRight} />
    </div>
  );
};

export default Dashboard;
