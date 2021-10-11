import React from "react";
import Person from "./components/Person";
import styles from "./Tree.module.css";
import { PropTypes } from "prop-types";

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
  // function makeTree(nodes, parentId, spouse) {
  //   return (data = nodes
  //     .filter(
  //       (node) =>
  //         node.parentId === parentId
  //     )
  //     .reduce(
  //       (tree, node) => [
  //         ...tree,
  //         {
  //           ...node,
  //           children: makeTree(nodes, node.id, node.spouse),
  //         },
  //       ],
  //       []
  //     ));
  // }
  function makeTree(nodes, parentId, spouse) {
    return (data = nodes
      .filter((node) => node.parentId === parentId && !node.spouceForChild)
      .reduce(
        (tree, node) => [
          ...tree,
          {
            ...node,
            children: makeTree(nodes, node.id, node.spouse),
          },
        ],
        []
      ));
  }

  makeTree(inputData, null, "");
  console.log(data);

  const childrensSpouces = inputData.filter(
    (childSpouce) => childSpouce.spouceForChild
  );
  console.log(childrensSpouces);

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
        childrensSpouces={childrensSpouces}
      />
    </div>
  );
};

Tree.propTypes = {
  inputData: PropTypes.array,
  WIDTH: PropTypes.string,
  HEIGHT: PropTypes.string,
  arrowHeadSize: PropTypes.number,
  spouseLineColor: PropTypes.string,
  childsLineColor: PropTypes.string,
  textFontSize: PropTypes.string,
  distanceByX: PropTypes.number,
  distanceByY: PropTypes.number,
};
export default Tree;
