import React, { useRef, useState } from "react";
import DiaryEdit from "../diary_edit/diary_edit";
import styles from "./diary.module.css";

const Diary = ({ onAdd, diaryList }) => {
  const [saveClick, setSaveClick] = useState(false);
  const [editClick, setEditClick] = useState(false);

  const formRef = useRef();
  const dateRef = useRef();
  const titleRef = useRef();
  const storyRef = useRef();

  const toggleSave = (e) => {
    e.preventDefault();
    const diary = {
      id: Date.now(),
      date: dateRef.current?.value,
      title: titleRef.current.value || "  ",
      story: storyRef.current?.value,
    };
    setSaveClick((saveClick) => !saveClick);
    onAdd(diary);
  };

  const toggleEdit = () => {
    setEditClick((editClick) => !editClick);
  };

  let newDiary = Object.keys(diaryList)[Object.keys(diaryList).length - 1];

  return (
    <>
      {saveClick ? (
        <div>
          {editClick ? (
            <div className={styles.afterSaved}>
              <button className={styles.saveBtn} onClick={toggleEdit}>
                save
              </button>
              <DiaryEdit onUpdate={onAdd} diary={diaryList[newDiary]} />
            </div>
          ) : (
            <div className={styles.text}>
              <button className={styles.editBtn} onClick={toggleEdit}>
                edit
              </button>
              <span className={styles.dateText}>
                Date : {diaryList[newDiary].date}
              </span>
              <span className={styles.titleText}>
                Title : {diaryList[newDiary].title}
              </span>
              <span className={styles.storyText}>
                <p className={styles.storySaved}>{diaryList[newDiary].story}</p>
              </span>
            </div>
          )}
        </div>
      ) : (
        <form ref={formRef} className={styles.form}>
          <div className={styles.date}>
            <button className={styles.saveBtn} onClick={toggleSave}>
              save
            </button>
            <label>
              Date :
              <input
                ref={dateRef}
                className={styles.dateInput}
                name='date'
                type='text'
              />
            </label>
          </div>
          <div className={styles.title}>
            <label>
              Title :
              <input
                ref={titleRef}
                className={styles.titleInput}
                name='title'
                type='text'
              />
            </label>
          </div>
          <div className={styles.story}>
            <label>
              <span className={styles.storyLable}>Story</span>
              <textarea
                ref={storyRef}
                className={styles.storyInput}
                name='story'
              />
            </label>
          </div>
        </form>
      )}
    </>
  );
};

export default Diary;
