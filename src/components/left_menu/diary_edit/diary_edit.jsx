import React from "react";
import styles from "./diary_edit.module.css";

const DiaryEdit = ({ onUpdate, diary }) => {
  const { date, title, story } = diary;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    onUpdate({
      ...diary,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.date}>
          <label>
            Date :
            <input
              className={styles.dateInput}
              name='date'
              type='text'
              value={date}
              onChange={onChange}
            />
          </label>
        </div>
        <div className={styles.title}>
          <label>
            Title :
            <input
              className={styles.titleInput}
              name='title'
              type='text'
              value={title}
              onChange={onChange}
            />
          </label>
        </div>
        <div className={styles.story}>
          <label>
            Story
            <textarea
              className={styles.storyInput}
              name='story'
              value={story}
              onChange={onChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default DiaryEdit;
