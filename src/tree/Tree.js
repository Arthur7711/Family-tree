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
  distanceByX,
  distanceByY,
}) => {
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
        distanceByX={distanceByX}
        distanceByY={distanceByY}
      />
    </div>
  );
};

export default Tree;
