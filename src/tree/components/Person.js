import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

const Person = ({
  personsData,
  WIDTH,
  HEIGHT,
  arrowHeadSize,
  spouseLineColor,
  childLineColor,
  textFontSize,
  distanceByX,
  distanceByY,
  childrenSpouses,
}) => {
  let result = 1;

  const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
  };

  const updateXarrow = useXarrow();
  // const DraggableBox = ({ id }) => {
  //   return (
  //     <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
  //       <div id={id} style={boxStyle}>
  //         {id}
  //       </div>
  //     </Draggable>
  //   );
  // };
  return (
    <div className={styles.allPersons}>
      {personsData.map((el) => (
        <div key={el.id}>
          {personsData.forEach((s) => {
            return el.spouse ? (
              <div key={el.id}>
                <Oneline
                  arrowHeadSize={arrowHeadSize}
                  WIDTH={WIDTH}
                  HEIGHT={HEIGHT}
                  spouseLineColor={spouseLineColor}
                  childLineColor={childLineColor}
                  textFontSize={textFontSize}
                  distanceByX={distanceByX}
                  distanceByY={distanceByY}
                  childrenSpouses={childrenSpouses}
                  {...el}
                />
                <Xarrow
                  color={spouseLineColor ? spouseLineColor : "blue"}
                  headSize={arrowHeadSize ? arrowHeadSize : 2}
                  start={s.spouse} //can be react ref
                  end={el.id} //or an id
                  path="grid"
                />
              </div>
            ) : null;
          })}
          <Oneline
            arrowHeadSize={arrowHeadSize}
            WIDTH={WIDTH}
            HEIGHT={HEIGHT}
            spouseLineColor={spouseLineColor}
            childLineColor={childLineColor}
            textFontSize={textFontSize}
            distanceByX={distanceByX}
            distanceByY={distanceByY}
            childrenSpouses={childrenSpouses}
            result={result}
            {...el}
          />
        </div>
      ))}
      {childrenSpouses &&
        childrenSpouses.map((el) => (
          <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div
              key={el.id}
              // style={{
              //   position: "absolute",
              //   top:
              //     // (distanceByY / 2 + 8) * localStorage.getItem(el.spouseForChild),
              //   left:
              //     // (150 + distanceByX) * localStorage.getItem(el.spouseForChild),
              // }}
            >
              <Oneline
                arrowHeadSize={arrowHeadSize}
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                spouseLineColor={spouseLineColor}
                childLineColor={childLineColor}
                textFontSize={textFontSize}
                childrenSpouses={childrenSpouses}
                {...el}
              />
            </div>
          </Draggable>
        ))}
    </div>
  );
};

export default Person;
