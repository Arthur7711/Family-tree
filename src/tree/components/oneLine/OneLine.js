import styles from "./OneLine.module.css";
import classNames from "classnames";
import Xarrow from "react-xarrows";
import React from "react";

const Oneline = ({
  id,
  name,
  gender,
  spouse,
  children,
  parentId,
  spouseForChild,
  WIDTH,
  HEIGHT,
  arrowHeadSize,
  spouseLineColor,
  childLineColor,
  textFontSize,
  distanceByX,
  distanceByY,
  result,
  // findingelement,
}) => {
  let y = distanceByY ? distanceByY : 100;
  let x = distanceByX ? distanceByX : 100;
  const hasChildren = children && children.length;

  // function findingelement(findById) {
  //   setTimeout(() => {
  //     let div1rect = document.getElementById(findById).getBoundingClientRect();
  //     let div1x = div1rect.left + div1rect.width / 2;
  //     let div1y = div1rect.top + div1rect.height / 2;
  //     console.log(div1x, div1y);
  //     // return obj;
  //   }, 300);
  // }
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ width: WIDTH, height: HEIGHT }}
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, spouseForChild_${spouseForChild}`}
      >
        {spouse &&
          parentId &&
          setTimeout(() => {
            let div1rect = document.getElementById(id).getBoundingClientRect();
            let div1x = div1rect.left + div1rect.width / 2;
            let div1y = div1rect.top + div1rect.height / 2;
            console.log(id, div1x, div1y);
          }, 300)}
        <span style={{ fontSize: textFontSize }} className={styles.fonts}>
          {name}
        </span>
      </div>
      {/* {console.log(window.outerWidth)} */}
      {spouse && (
        <Xarrow
          color={spouseLineColor ? spouseLineColor : "blue"}
          headSize={arrowHeadSize ? arrowHeadSize : 2}
          start={spouse} //can be react ref
          end={id} //or an id
          path="grid"
        />
      )}

      {hasChildren
        ? children.map((item, ind) => (
            <div
              key={item.id}
              className="test4"
              style={{
                padding: "30px",
                position: "absolute",
                top: y,
                left: x * ind * 1.5,
              }}
            >
              {/* {localStorage.setItem(`${item.id}X`, x)}
              {localStorage.setItem(`${item.id}Y`, y)} */}

              <Oneline
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                arrowHeadSize={arrowHeadSize}
                spouseLineColor={spouseLineColor}
                childLineColor={childLineColor}
                textFontSize={textFontSize}
                distanceByX={distanceByX}
                distanceByY={distanceByY}
                {...item}
                result={result}
              />
              <Xarrow
                start={item.parentId}
                end={item.id}
                headSize={arrowHeadSize ? arrowHeadSize : 2}
                color={childLineColor ? childLineColor : "#ccc"}
                path="grid"
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Oneline;
