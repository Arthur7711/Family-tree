import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

const Person = ({ WIDTH, HEIGHT,COLOR }) => {
  return (
    // <div className={styles.pers}>
      <div className={styles.inner} style={{ width: WIDTH, height: HEIGHT }} />
    // </div>
  );
};

export default Person;
