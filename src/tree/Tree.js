import React from "react";
import Person from "./components/Person";
import styles from "./Tree.module.css";

const Tree = () => {
  const dataTree = [
    {
      id: "p1",
      gender: "male",
      parents: [],
      children: [],
      spouse: [],
      name: "someName",
    },
    {
      id: "p2",
      gender: "female",
      parents: [],
      children: [],
      spouse: [],
      name: "someName",
    },
    {
      id: "p3",
      gender: "female",
      parents: [],
      children: [],
      spouse: [],
      name: "someName",
    },
    {
      id: "p4",
      gender: "male",
      parents: [],
      children: [],
      spouse: [],
      name: "someName",
    },
  ];
  return (
    <div className={styles.tree}>
      {dataTree.map((person, i) => (
        <Person pers={person} key={i} />
      ))}
    </div>
  );
};

export default Tree;
