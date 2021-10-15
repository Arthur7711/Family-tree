import React, { useLayoutEffect, useState } from "react";
import Person from "./components/Person";
import styles from "./Tree.module.css";
import { PropTypes } from "prop-types";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

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
  lineType,
  changingState,
  input,
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

  useWindowSize();

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
        changingState={changingState}
        input={input}
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
  lineType: PropTypes.string,
  input:PropTypes.array
};
export default Tree;
