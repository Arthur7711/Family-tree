import React from "react";
import Oneline from "./oneLine/OneLine";
import styles from "./Person.module.css";
import Xarrow from "react-xarrows";

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
  // window.location.reload()
  
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
            {...el}
          />
        </div>
      ))}
      {childrenSpouses &&
        childrenSpouses.map((el) => (
          <div
            key={el.id}
            style={{
              position: "absolute",
              left: distanceByX
                ? localStorage.getItem(el.spouseForChild + "x") - distanceByX
                : localStorage.getItem(el.spouseForChild + "x") - 75,
              top: distanceByY
                ? localStorage.getItem(el.spouseForChild + "y") -
                  distanceByY / 2 -
                  2
                : localStorage.getItem(el.spouseForChild + "y") - 27,
            }}
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
        ))}
    </div>
  );
};

export default Person;
