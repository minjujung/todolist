import React, { useEffect, useRef, useState } from "react";
import styles from "./diary_detail.module.css";

const DiaryDetail = ({ diary, onUpdate }) => {
  const { date, title, story } = diary;
  const [edit, setEdit] = useState(false);

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

  const toggleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <>
      {edit ? (
        <div className={styles.afterSaved}>
          <button className={styles.saveBtn} onClick={toggleEdit}>
            save
          </button>
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
      ) : (
        <div className={styles.text}>
          <button className={styles.editBtn} onClick={toggleEdit}>
            edit
          </button>
          <span className={styles.dateText}>Date : {date}</span>
          <span className={styles.titleText}>Title :{title}</span>
          <span className={styles.storyText}>
            <p className={styles.storySaved}>{story}</p>
          </span>
        </div>
      )}
    </>
  );
};

export default DiaryDetail;
