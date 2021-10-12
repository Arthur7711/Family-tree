import styles from "./OneLine.module.css";
import classNames from "classnames";
import Xarrow from "react-xarrows";

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
}) => {
  let y = distanceByY ? distanceByY : 100;
  let x = distanceByX ? distanceByX : 100;
  const hasChildren = children && children.length;
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ width: WIDTH, height: HEIGHT }}
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, spouseForChild_${spouseForChild}`}
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
          path="grid"
        />
      )}

      {hasChildren
        ? children.map((item, ind) => (
            <div
              key={item.id}
              className="test1"
              style={{
                padding: "30px",
                position: "absolute",
                top: y,
                left: x * ind * 2,
              }}
            >
              {localStorage.setItem(`${item.id}X`,x * ind * 2)}
              {localStorage.setItem(item.id, result++)}
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
