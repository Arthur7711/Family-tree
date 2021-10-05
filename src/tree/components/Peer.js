import React from "react";
import styles from "./Peer.module.css";
import classNames from "classnames";

const Peer = ({ inputData }) => {
  console.log(inputData);
  //   for (let i = 0; i < inputData.length; i++) {
  //     let per = inputData[i];
  //     for (let j = i; j < inputData.length; j++) {
  //       let el = inputData[j];
  //       if (
  //         per.parents.length < 1 &&
  //         per.spouse === el.id &&
  //         per.id === el.spouse
  //       ) {
  //         console.log(per.name, el.name, "they are married");
  //       } else if (
  //         per.parents.length < 1 &&
  //         per.spouse !== el.id &&
  //         per.id !== el.spouse
  //       ) {
  //         console.log(per.name, "single");
  //       }
  //     }
  //   }
  return (
    <>
      <div className={styles.inlines}>
        {inputData
          .filter((person) => person.parents.length < 1 )
          .map((pers) => (
            <div
              title={pers.name}
              className={classNames(styles.inner, styles[pers.gender])}
              key={pers.id}
            >
              {pers.id}
            </div>
          ))}

        {/* {inputData.forEach((person) => {
          inputData.forEach((el) => {
           person.parents.length < 1 &&
            person.spouse === el.id &&
            person.id === el.spouse ? (
              <div
                title={person.name}
                className={classNames(styles.inner, styles[person.gender])}
                key={person.id}
              >
                {person.id}
              </div>
            ) : person.parents.length < 1 &&
              person.spouse !== el.id &&
              person.id !== el.spouse ? (
              <div
                title={person.name}
                className={classNames(styles.inner, styles[person.gender])}
                key={person.id}
              >
                {person.id}
              </div>
            ) : null;
          });
        })} */}

        {/* {inputData.forEach((person) => {
          inputData.forEach((el) => {
            if (
              person.parents.length < 1 &&
              person.spouse === el.id &&
              person.id === el.spouse
            ) {
              //   console.log(person.name, el.name, "are married");
              <div
                title={person.name}
                className={classNames(styles.inner, styles[person.gender])}
                key={person.id}
              >
                {person.id}
              </div>;
            } else if (
              person.parents.length < 1 &&
              person.spouse !== el.id &&
              person.id !== el.spouse
            ) {
              console.log(person.name, "single");
            }
          });
        })} */}
      </div>
    </>
  );
};

export default Peer;
