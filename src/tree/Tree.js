import React from "react";
import Person from "./components/Person";

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
    <div>
      {dataTree.map((person) => (
        <Person COLOR={person.gender} WIDTH="70px" HEIGHT="80px" />
      ))}
    </div>
  );
};

export default Tree;
