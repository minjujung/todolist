import React, { useState } from "react";
import Diary from "../diary/diary";
import DiaryDetail from "../diary_detail/diary_detail";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./diary_list.module.css";

const DiaryList = (props) => {
  const [diaryList, setDiaryList] = useState({});
  const [showList, setShowList] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [detailKey, setDetailKey] = useState(null);

  const goToList = () => {
    setShowList(true);
    setShowForm(false);
    setShowDetail(false);
  };

  const goToForm = () => {
    setShowList(false);
    setShowForm(true);
    setShowDetail(false);
  };

  const goToDetail = (key) => {
    setDetailKey(key);
    setShowList(false);
    setShowForm(false);
    setShowDetail(true);
  };

  const handleAddOrUpdate = (diary) => {
    setDiaryList((diaryList) => {
      const updated = { ...diaryList };
      updated[diary.id] = diary;
      return updated;
    });
  };

  //javascript 의 delete 연산자(operator) 사용
  //The JavaScript delete operator removes a property from an object
  //: 객체의 속성을 삭제하는 연산자
  const handleDelete = (key) => {
    setDiaryList((diaryList) => {
      const updated = { ...diaryList };
      delete updated[key];
      return updated;
    });
  };

  return (
    <div className={styles.container}>
      {showList ? (
        <ul className={styles.diaryList}>
          <h3 className={styles.title}>your diary box</h3>
          <div className={styles.diaryTitles}>
            {Object.keys(diaryList).map((key) => (
              <div className={styles.itemFrame} key={key}>
                <li className={styles.item} onClick={() => goToDetail(key)}>
                  {diaryList[key].title.length > 18
                    ? `${diaryList[key].title.slice(0, 13)}...`
                    : diaryList[key].title}
                </li>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(key)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        </ul>
      ) : null}
      {showForm ? (
        <div className={styles.diary}>
          <Diary onAdd={handleAddOrUpdate} diaryList={diaryList} />
        </div>
      ) : null}
      {showDetail ? (
        <div className={styles.diaryDetail}>
          <DiaryDetail
            diary={diaryList[detailKey]}
            onUpdate={handleAddOrUpdate}
          />
        </div>
      ) : null}
      <nav className={styles.navbar}>
        <ul className={styles.sidebar}>
          <li
            className={`${styles.menu} ${showList ? styles.list : ""}`}
            onClick={goToList}
          >
            List
          </li>
          <li
            className={`${styles.menu} ${showForm ? styles.form : ""}`}
            onClick={goToForm}
          >
            Plus
          </li>
          {/* <li className={styles.menu}>Calendar</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default DiaryList;
