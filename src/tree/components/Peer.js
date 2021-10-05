import React from "react";
import styles from "./Peer.module.css";
import classNames from "classnames";

const Peer = ({ inputData }) => {
  console.log(inputData);
  for (let i = 0; i < inputData.length; i++) {
    let per = inputData[i];
    for (let j = i; j < inputData.length; j++) {
      let el = inputData[j];
      if (
        per.parents.length < 1 &&
        per.spouse === el.id &&
        per.id === el.spouse
      ) {
        console.log(per.name, el.name, "they are married");
      } else if (
        per.parents.length < 1 &&
        per.spouse !== el.id &&
        per.id !== el.spouse
      ) {
        console.log(per.name, "single");
      }
    }
  }
  return (
    <div className={styles.inlines}>
      {inputData
        .filter((person) => person.parents.length < 1)
        .map((pers) => (
          <div
            title={pers.name}
            className={classNames(styles.inner, styles[pers.gender])}
            key={pers.id}
          >
            {pers.id}
          </div>
        ))}
    </div>
  );
};

export default Peer;
