import React, { useRef, useState } from "react";
import styles from "./todos.module.css";

const ToDos = ({ onAdd }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const todo = inputRef.current.value
      ? inputRef.current.value
      : "Write something for yourself!";
    formRef.current.reset();
    onAdd(todo);
  };

  return (
    <div className={styles.container}>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type='text'
          placeholder='I love music...♪♪'
        />
        <button className={styles.btn}>OK!</button>
      </form>
    </div>
  );
};

export default ToDos;
