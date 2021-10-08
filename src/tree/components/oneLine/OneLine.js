import styles from "./OneLine.module.css";
import classNames from "classnames";
import Xarrow from "react-xarrows";
import { useState } from "react";

const Oneline = ({
  id,
  name,
  gender,
  spouse,
  children,
  parentId,
  childs,
  WIDTH,
  HEIGHT,
  arrowHeadSize,
  spouseLineColor,
  childsLineColor,
  textFontSize,
  distanceByX,
  distanceByY,
}) => {
  const [y, setY] = useState(distanceByY ? distanceByY : 100);
  const [x, setX] = useState(distanceByX ? distanceByX : 100);
  const hasChildren = children && children.length;

  function getNewPosition() {
    distanceByX ? setY(y + distanceByX) : setY(y + 100);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ width: WIDTH, height: HEIGHT }}
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, childrens_${childs}`}
      >
        <span style={{ fontSize: textFontSize }} className={styles.fonts}>
          {name}
        </span>
      </div>
      {spouse && (
        <Xarrow
          color={spouseLineColor ? spouseLineColor : "blue"}
          headSize={arrowHeadSize ? arrowHeadSize : 2}
          start={spouse} //can be react ref
          end={id} //or an id
        />
      )}

      {hasChildren
        ? children.map((item, key) => (
            <div
              key={item.id}
              className="test1"
              style={{
                padding: "30px",
                position: "absolute",
                top: y,
                left: x * key,
              }}
            >
              <Oneline
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                arrowHeadSize={arrowHeadSize}
                getNewPosition={getNewPosition}
                spouseLineColor={spouseLineColor}
                childsLineColor={childsLineColor}
                textFontSize={textFontSize}
                distanceByX={distanceByX}
                distanceByY={distanceByY}
                {...item}
              />
              <Xarrow
                start={item.parentId}
                end={item.id}
                headSize={arrowHeadSize ? arrowHeadSize : 2}
                color={childsLineColor ? childsLineColor : "#ccc"}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Oneline;
