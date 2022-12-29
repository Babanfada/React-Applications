import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <ul className={styles.navigation}>
        <Link className={styles.link} to={"/App"}>
          <li>Note Manager</li>
        </Link>
        <Link className={styles.link} to={"/Manager"}>
          <li>Contact Manager </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
