import React from "react";
import styles from "./Person.module.css";
import classNames from "classnames";

const Person = ({ personData}) => {
  // console.log(personsData);
  // const RecursiveComponent = ({ name, items }) => {
  // const hasChildren = items && items.length
  // const hasChildren = children && children.length;

  //   return (
  //     <>
  //       {name}
  //       {hasChildren && items.map((item) => (
  //         <RecursiveComponent key={item.name} {...item} />
  //       ))}
  //     </>
  //   )
  // }
  // const unHidding = (data) => {
  //   data.forEach((child) => {
  //     console.log(child);
  // <div
  //   title={child.name}
  //   className={classNames(styles.inner, styles[child.gender])}
  //   key={child.id}
  // />;
  // if (child.children === undefined) {
  //   return;
  // }
  //     if (child.children) {
  //       unHidding(child.children);
  //     }
  //   });
  // };
  // unHidding(personsData);
  return (
    <div className={styles.allPersons}>
      {personData &&
        personData.map((person) => (
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
