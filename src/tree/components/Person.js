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
  childsLineColor,
  textFontSize,
  distanceByX,
  distanceByY,
  childrensSpouces,
}) => {
  let result = 1;

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
                  childsLineColor={childsLineColor}
                  textFontSize={textFontSize}
                  distanceByX={distanceByX}
                  distanceByY={distanceByY}
                  childrensSpouces={childrensSpouces}
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
            childsLineColor={childsLineColor}
            textFontSize={textFontSize}
            distanceByX={distanceByX}
            distanceByY={distanceByY}
            childrensSpouces={childrensSpouces}
            result={result}
            {...el}
          />
        </div>
      ))}
      {childrensSpouces &&
        childrensSpouces.map((el) => (
          <div
            key={el.id}
            style={{
              position: "absolute",
              top:
                localStorage.getItem(el.spouceForChild) * distanceByY +
                distanceByY / 2 +
                8,
              left:
                (150 + distanceByX) * localStorage.getItem(el.spouceForChild),
            }}
          >
            <Oneline
              arrowHeadSize={arrowHeadSize}
              WIDTH={WIDTH}
              HEIGHT={HEIGHT}
              spouseLineColor={spouseLineColor}
              childsLineColor={childsLineColor}
              textFontSize={textFontSize}
              childrensSpouces={childrensSpouces}
              {...el}
            />
          </div>
        ))}
    </div>
  );
};

export default Person;
