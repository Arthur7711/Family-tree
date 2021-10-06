import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";

const Person = ({ personsData }) => {
  return (
    <div className={styles.allPersons}>
      {personsData.map((el) =>( 
        <Oneline key={el.id } {...el} />
      ))}
    </div>
  );
};

export default Person;
