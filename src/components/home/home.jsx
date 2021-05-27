import React, { useEffect, useRef } from "react";
import axios from "axios";
import styles from "./home.module.css";
import { VscArrowRight } from "react-icons/vsc";
import { useHistory } from "react-router";

const Home = (props) => {
  const inputRef = useRef();
  const history = useHistory();
  console.log(history);
  const goToBoard = () => {
    history.push({
      pathname: "/dashboard",
      state: { user: inputRef.current.value },
    });
  };

  const onClick = () => {
    goToBoard();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      goToBoard();
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/songs").then((res) => console.log(res));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>galaxy diary</h1>
      <h2 className={styles.sub}>What is your name?</h2>
      <div className={styles.form}>
        <input
          ref={inputRef}
          className={styles.input}
          type='text'
          placeholder='Let me know your name :)'
          onKeyPress={onKeyPress}
        />
        <button className={styles.btn} onClick={onClick}>
          <VscArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
