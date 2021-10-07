import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";
import Xarrow from "react-xarrows";

const Person = ({ personsData }) => {
  // console.log(spouseLineColor)
  return (
    <div className={styles.allPersons}>
      {personsData.map((el) => (
        <div key={el.id}>
          {personsData.forEach((s) => {
            return el.spouse ? (
              <div key={el.id}>
                <Oneline {...el} />
                <Xarrow
                  // color={spouseLineColor ? spouseLineColor : "red"}
                  // color="#ccc"
                  headSize={2}
                  start={s.spouse} //can be react ref
                  end={el.id} //or an id
                />
              </div>
            ) : null;
          })}
          <Oneline {...el} />
        </div>
      ))}
    </div>
  );
};

export default Person;
