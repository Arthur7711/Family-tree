import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";
import Xarrow from "react-xarrows";

const Person = ({ personsData }) => {
  return (
    <div className={styles.allPersons}>
      {personsData.map((el) => (
        <>
          {personsData.forEach((s) => {
            return el.spouse ? (
              <>
                <Oneline key={el.id} {...el} />
                <Xarrow
                  color="red"
                  headSize={2}
                  start={s.spouse} //can be react ref
                  end={el.id} //or an id
                />
              </>
            ) : null;
          })}
          <Oneline key={el.id} {...el} />
        </>
      ))}
    </div>
  );
};

export default Person;
