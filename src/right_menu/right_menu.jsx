import React from "react";
import styles from "./right_menu.module.css";
import { FaArrowLeft } from "react-icons/fa";

const RightMenu = ({ rightShow, toggleRight }) => {
  return (
    <div className={`${styles.menu} ${rightShow ? styles.show : styles.hide}`}>
      <div className={styles.btn} onClick={toggleRight}>
        <FaArrowLeft />
      </div>
      <h1>hello</h1>
    </div>
  );
};

export default RightMenu;
