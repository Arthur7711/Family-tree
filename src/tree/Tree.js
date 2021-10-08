import React from "react";
import Person from "./components/Person";
import styles from "./Tree.module.css";

const Tree = ({
  inputData,
  WIDTH,
  HEIGHT,
  arrowHeadSize,
  spouseLineColor,
  childsLineColor,
  textFontSize,
}) => {
  // const dataTree = [
  //   {
  //     id: "p1",
  //     gender: "male",
  //     parents: [],
  //     children: [{ id: "p3", type: "blood" }],
  //     spouse: [],
  //     siblings: [],
  //     name: "someName1",
  //   },
  //   {
  //     id: "p2",
  //     gender: "female",
  //     parents: [],
  //     children: [{ id: "p3", type: "blood" }],
  //     spouse: [],
  //     siblings: [],
  //     name: "someName2",
  //   },
  //   {
  //     id: "p3",
  //     gender: "female",
  //     parents: [
  //       { id: "p1", type: "blood" },
  //       { id: "p2", type: "blood" },
  //     ],
  //     children: [],
  //     spouse: [],
  //     siblings: [],
  //     name: "someName3",
  //   },
  //   {
  //     id: "p4",
  //     gender: "male",
  //     parents: [
  //       { id: "p1", type: "blood" },
  //       { id: "p2", type: "blood" },
  //     ],
  //     children: [],
  //     spouse: [],
  //     siblings: [],
  //     name: "someName4",
  //   },
  // ];

  let data;
  function makeTree(nodes, parentId) {
    return (data = nodes
      .filter((node) => node.parentId === parentId)
      .reduce(
        (tree, node) => [
          ...tree,
          {
            ...node,
            children: makeTree(nodes, node.id),
          },
        ],
        []
      ));
  }

  makeTree(inputData, null);
  console.log(data);

  return (
    <div className={styles.tree}>
      <Person
        spouseLineColor={spouseLineColor}
        WIDTH={WIDTH}
        HEIGHT={HEIGHT}
        arrowHeadSize={arrowHeadSize}
        childsLineColor={childsLineColor}
        textFontSize={textFontSize}
        personsData={data}
      />
    </div>
  );
};

export default Tree;
