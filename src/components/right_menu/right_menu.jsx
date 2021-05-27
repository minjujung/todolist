import React, { useEffect, useState } from "react";
import styles from "./right_menu.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import SearchVideo from "./search_video/search_video";

const RightMenu = ({ rightShow, toggleRight, videos, onSearch }) => {
  return (
    <div className={`${styles.menu} ${rightShow ? styles.show : styles.hide}`}>
      <div className={styles.backBtn} onClick={toggleRight}>
        <span className={styles.back}>Back</span>
        <HiOutlineArrowRight />
      </div>
      <SearchVideo onSearch={onSearch} />
      <div className={styles.videos}>
        {videos.map((video) => (
          <iframe
            className={styles.video}
            key={video.etag}
            title='popular'
            src={`https://www.youtube.com/embed/${video.id}`}
            width='400'
            height='300'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default RightMenu;
