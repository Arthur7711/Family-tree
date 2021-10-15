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
  childLineColor,
  textFontSize,
  distanceByX,
  distanceByY,
  lineType
}) => {
  let data;
  function makeTree(nodes, parentId, spouse) {
    return (data = nodes
      .filter((node) => node.parentId === parentId && !node.spouseForChild)
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

  const childrenSpouses = inputData.filter(
    (childSpouse) => childSpouse.spouseForChild
  );

  return (
    <div className={styles.tree}>
      <Person
        spouseLineColor={spouseLineColor}
        WIDTH={WIDTH}
        HEIGHT={HEIGHT}
        arrowHeadSize={arrowHeadSize}
        childLineColor={childLineColor}
        textFontSize={textFontSize}
        personsData={data}
        distanceByX={distanceByX}
        distanceByY={distanceByY}
        childrenSpouses={childrenSpouses}
        lineType={lineType}
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
  childLineColor: PropTypes.string,
  textFontSize: PropTypes.string,
  distanceByX: PropTypes.number,
  distanceByY: PropTypes.number,
  lineType:PropTypes.string
};
export default Tree;
