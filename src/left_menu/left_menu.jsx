import React, { useRef, useState } from "react";
import styles from "./left_menu.module.css";
import { FaStar, FaRegStar, FaRegStickyNote, FaTrashAlt } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import DiaryList from "./diary_list/diary_list";

const LeftMenu = ({
  todos,
  leftShow,
  toggleLeft,
  toggleStar,
  toggleMemo,
  writeMemo,
  onDelete,
}) => {
  const inputRef = useRef();

  const onClick = (id) => {
    toggleMemo(id);
    if (inputRef.current?.value !== null) {
      writeMemo(inputRef.current?.value);
    } else {
      writeMemo("");
    }
  };

  return (
    <div className={`${styles.menu} ${leftShow ? styles.show : styles.hide}`}>
      <div className={styles.backBtn} onClick={toggleLeft}>
        <HiOutlineArrowLeft />
        <span className={styles.back}>Back</span>
      </div>
      <ul className={styles.completed}>
        {todos.map((todo) =>
          todo.complete ? (
            <li
              key={todo.id}
              className={`${styles.item} ${todo.memo ? styles.memo : ""}`}
            >
              <span
                className={`${styles.itemName} ${todo.memo ? styles.memo : ""}`}
              >
                {todo.todo}
              </span>
              <div className={`${styles.btns} ${todo.memo ? styles.memo : ""}`}>
                {todo.star ? (
                  <div onClick={() => toggleStar(todo.id)}>
                    <FaStar />
                  </div>
                ) : (
                  <div onClick={() => toggleStar(todo.id)}>
                    <FaRegStar />
                  </div>
                )}
                {todo.memo ? (
                  <div onClick={() => onClick(todo.id)}>
                    <FiCheck />
                  </div>
                ) : (
                  <div onClick={() => toggleMemo(todo.id)}>
                    <FaRegStickyNote />
                  </div>
                )}
                <div onClick={() => onDelete(todo.id)}>
                  <FaTrashAlt />
                </div>
              </div>
              {todo.memo ? (
                <textarea
                  ref={inputRef}
                  className={styles.textarea}
                  placeholder={
                    todo.memoText ? "" : "Memo anything about this..."
                  }
                  defaultValue={todo.memoText}
                ></textarea>
              ) : (
                ""
              )}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <DiaryList />
    </div>
  );
};

export default LeftMenu;
