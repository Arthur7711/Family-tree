import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

const Person = ({ personsData }) => {
  console.log(personsData);
  return (
    <div className={styles.allPersons}>
      {personsData &&
        personsData.map((person) => (
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
