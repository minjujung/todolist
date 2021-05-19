import React from "react";
import styles from "./todosEdit.module.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const TodosEdit = ({ todos, edit, onUpdate, onDelete, onEditText, onEdit }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <div className={styles.todo} key={todo.id}>
          {todo.id === edit ? (
            <input
              className={styles.input}
              type='text'
              onChange={(e) => onEditText(e.target.value)}
              placeholder={todo.todo}
            />
          ) : (
            <p className={styles.todoText}>{todo.todo}</p>
          )}
          {edit === todo.id ? (
            <button
              className={styles.saveBtn}
              onClick={() => onUpdate(todo.id)}
            >
              <FiCheck />
            </button>
          ) : (
            <button className={styles.editBtn} onClick={() => onEdit(todo.id)}>
              <FaPencilAlt />
            </button>
          )}
          <button
            className={styles.deleteBtn}
            onClick={() => onDelete(todo.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosEdit;
