import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";
import Xarrow from "react-xarrows";

const Person = ({ personsData }) => {
  return (
    <div className={styles.allPersons}>
      {/* <div>
        {personsData
          .filter((person) => person.spouse)
          .map((el) => (
            <Oneline key={el.id} {...el} />
          ))}
      </div> */}
      {personsData.map((el) => (
        <>
          <Oneline key={el.id} {...el} />
          {/* {personsData.map((s) => (
            <>
              <Oneline key={s.id} {...s} />
              <Xarrow
                color="red"
                headSize={2}
                start={s.spouse} //can be react ref
                end={s.id} //or an id
              />
            </>
          ))} */}
        </>
      ))}
    </div>
  );
};

export default Person;
