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
  lineType,
  changingState,
  input,
  otherSpouses,
  otherSpouseNum,
}) => {
  return (
    <div className={styles.allPersons}>
      {personsData.map((el) => (
        <div key={el.id}>
          {personsData.forEach((s) => {
            return el.spouse ? (
              <div
                key={el.id}
                style={{
                  position: "absolute",
                  left: distanceByX
                    ? localStorage.getItem(el.spouseForChild + "x") -
                      distanceByX
                    : localStorage.getItem(el.spouseForChild + "x") - 75,
                  top: distanceByY
                    ? localStorage.getItem(el.spouseForChild + "y") -
                      distanceByY -
                      2
                    : localStorage.getItem(el.spouseForChild + "y") - 0,
                }}
              >
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
                  lineType={lineType}
                  changingState={changingState}
                  otherSpouses={otherSpouses}
                  otherSpouseNum={otherSpouseNum}
                  {...el}
                />
                <Xarrow
                  color={spouseLineColor ? spouseLineColor : "blue"}
                  headSize={arrowHeadSize ? arrowHeadSize : 2}
                  start={s.spouse} //can be react ref
                  end={el.id} //or an id
                  path={lineType ? lineType : "grid"}
                  zIndex={-5}
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
            lineType={lineType}
            changingState={changingState}
            otherSpouses={otherSpouses}
            otherSpouseNum={otherSpouseNum}
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
                  distanceByY -
                  2
                : localStorage.getItem(el.spouseForChild + "y") - 0,
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
              lineType={lineType}
              changingState={changingState}
              otherSpouses={otherSpouses}
              otherSpouseNum={otherSpouseNum}
              {...el}
            />
          </div>
        ))}
      {otherSpouses &&
        otherSpouses.map((el) => (
          <div
            key={el.id}
            style={{
              position: "absolute",
              left: distanceByX
                ? (localStorage.getItem(el.otherSpouse + "x") - distanceByX) *
                  1.1 *
                  `1.${el.otherSpouseNum}`
                : localStorage.getItem(el.otherSpouse + "x") + 75,
              top: distanceByY
                ? localStorage.getItem(el.otherSpouse + "y") - distanceByY - 2
                : localStorage.getItem(el.otherSpouse + "y") - 0,
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
              lineType={lineType}
              changingState={changingState}
              otherSpouses={otherSpouses}
              otherSpouseNum={otherSpouseNum}
              {...el}
            />
            <Xarrow
              color={spouseLineColor ? spouseLineColor : "blue"}
              headSize={arrowHeadSize ? arrowHeadSize : 2}
              start={el.otherSpouse} //can be react ref
              end={el.id} //or an id
              zIndex={-5}
            />
          </div>
        ))}
      <p className={styles.back} onClick={() => input && changingState(input)}>
        go to first position
      </p>
    </div>
  );
};

export default Person;
