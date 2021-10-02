import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

let cx = classNames.bind(styles)

const Person = ({ pers }) => {
  let bgColor = pers.gender;

  return (
    <div className={styles.inner} />
  );
};

export default Person;
