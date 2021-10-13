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
  let result = 1;

  function findingelement(findById) {
    let obj;
    setTimeout(() => {
      let div1rect = document.getElementById(findById).getBoundingClientRect();
      let div1x = div1rect.left + div1rect.width / 2;
      let div1y = div1rect.top + div1rect.height / 2;
      obj = { forLeftObj: div1x, forTopObj: div1y };
      console.log(obj);
      // return obj;
    }, 300);
    return obj;
  }

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
          <div key={el.id}>
            {findingelement(() => el.spouseForChild)}
            {/* {el.spouseForChild && setTimeout(() => {
              findingelement(() => el.spouseForChild);
            }, 300)} */}
            <Oneline
              arrowHeadSize={arrowHeadSize}
              WIDTH={WIDTH}
              HEIGHT={HEIGHT}
              spouseLineColor={spouseLineColor}
              childLineColor={childLineColor}
              textFontSize={textFontSize}
              childrenSpouses={childrenSpouses}
              findingelement={findingelement}
              {...el}
            />
          </div>
        ))}
    </div>
  );
};

export default Person;
