import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

const Person = ({ pers }) => {
  return (
    <div
      title={pers.name}
      className={classNames(styles.inner, styles[pers.gender])}
    />
  );
};

export default Person;
