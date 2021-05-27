import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search_video.module.css";

const SearchVideo = ({ onSearch }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    onSearch(inputRef.current.value);
  };
  return (
    <div className={styles.searchHeader}>
      <form className={styles.searchBar} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type='text'
          placeholder='Search Fun Video...><'
        />
        <button className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};
export default SearchVideo;
