import React from "react";
import styles from "./Person.module.css";

const Person = ({ WIDTH, HEIGHT }) => {
  return (
    // <div className={styles.pers}>
      <div className={styles.inner} style={{ width: WIDTH, height: HEIGHT }} />
    // </div>
  );
};

export default Person;
