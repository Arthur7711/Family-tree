import React from "react";
import Person from "./components/Person";
import styles from "./Tree.module.css";

const Tree = () => {
  const dataTree = [
    {
      id: "p1",
      gender: "male",
      parents: [],
      children: [{ id: "p3", type: "blood" }],
      spouse: [],
      siblings: [],
      name: "someName1",
    },
    {
      id: "p2",
      gender: "female",
      parents: [],
      children: [{ id: "p3", type: "blood" }],
      spouse: [],
      siblings: [],
      name: "someName2",
    },
    {
      id: "p3",
      gender: "female",
      parents: [
        { id: "p1", type: "blood" },
        { id: "p2", type: "blood" },
      ],
      children: [],
      spouse: [],
      siblings: [],
      name: "someName3",
    },
    {
      id: "p4",
      gender: "male",
      parents: [],
      children: [],
      spouse: [],
      siblings: [],
      name: "someName4",
    },
  ];

  return (
    <div className={styles.tree}>
      <div>
        <Person personsData={dataTree} />
      </div>
    </div>
  );
};

export default Tree;
