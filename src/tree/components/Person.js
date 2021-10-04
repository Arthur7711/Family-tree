import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

const Person = ({ personsData, inputData }) => {
  // console.log(personsData);
  const unHidding = (data) => {
    data.forEach((child) => {
      console.log(child);
      // <div
      //   title={child.name}
      //   className={classNames(styles.inner, styles[child.gender])}
      //   key={child.id}
      // />;
      if (child.children === undefined) {
        return;
      }
      if (child.children) {
        unHidding(child.children);
      }
    });
  };
  // unHidding(personsData);
  return (
    <div className={styles.allPersons}>
      {unHidding(personsData)}
      {inputData &&
        inputData.map((person) => (
          <div
            title={person.name}
            className={classNames(styles.inner, styles[person.gender])}
            key={person.id}
          />
        ))}
    </div>
  );
};

export default Person;
