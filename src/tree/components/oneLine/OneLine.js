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
  secondLine,
  otherSpouses,
  otherSpouseNum,
  secondParent,
}) => {
  // let y = distanceByY ? distanceByY : 50;
  let x = distanceByX ? distanceByX : 75;
  const hasChildren = children && children.length;

  if (!localStorage.getItem("newCount")) {
    localStorage.setItem("newCount", 0);
  }

  if (localStorage.getItem("newCount") < 2) {
    setTimeout(() => {
      localStorage.setItem(
        "newCount",
        Number(localStorage.getItem("newCount")) + 1
      );
      window.location.reload();
    }, 200);
  }

  return (
    <div style={{ position: "relative", margin: "25px 25px 0 0" }}>
      <div
        style={{ width: WIDTH, height: HEIGHT }}
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`${name}`}
        onClick={() => secondLine && changingState(secondLine)}
      >
        {secondLine ? (
          <div
            style={
              gender === "male"
                ? {
                    width: "20px",
                    height: "10px",
                    position: "absolute",
                    top: -5,
                    right: 5,
                    borderRadius: "5px 0",
                    backgroundColor: "#fdaed8",
                  }
                : {
                    width: "20px",
                    height: "10px",
                    position: "absolute",
                    top: -5,
                    right: 5,
                    borderRadius: "5px 0",
                    backgroundColor: "#a4ecff",
                  }
            }
          />
        ) : null}
        {setTimeout(() => {
          let div1rect = document.getElementById(id).getBoundingClientRect();
          let div1x = div1rect.left + div1rect.width / 2;
          let div1y = div1rect.top + div1rect.height / 2;
          localStorage.setItem(`${id}x`, div1x);
          localStorage.setItem(`${id}y`, div1y);
        }, 0)}
        <span style={{ fontSize: textFontSize }} className={styles.fonts}>
          {name}
        </span>
      </div>
      {spouse && (
        <Xarrow
          color={spouseLineColor ? spouseLineColor : "blue"}
          headSize={arrowHeadSize ? arrowHeadSize : 1}
          start={spouse} //can be react ref
          end={id} //or an id
          path={lineType ? lineType : "grid"}
          zIndex={-5}
          strokeWidth={1}
        />
      )}

      {hasChildren
        ? children.map((item, ind) => (
            <div
              key={item.id}
              className="test4"
              style={
                !secondParent && !parentId
                  ? {
                      position: "absolute",
                      margin: "25px 25px 0 30px ",
                      left: x * ind * 1.5,
                    }
                  : {
                      position: "absolute",
                      margin: "25px 0px 0 0px ",
                      left: x * ind * 1.5,
                    }
              }
            >
              <Oneline
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                arrowHeadSize={arrowHeadSize}
                spouseLineColor={spouseLineColor}
                childLineColor={childLineColor}
                textFontSize={textFontSize}
                distanceByX={distanceByX}
                distanceByY={distanceByY}
                lineType={lineType}
                changingState={changingState}
                otherSpouses={otherSpouses}
                otherSpouseNum={otherSpouseNum}
                secondParent={secondParent}
                {...item}
              />
              <Xarrow
                start={item.parentId}
                end={item.id}
                headSize={arrowHeadSize ? arrowHeadSize : 2}
                color={childLineColor ? childLineColor : "#ccc"}
                path={lineType ? lineType : "grid"}
                zIndex={-5}
                strokeWidth={1}
              />

              <Xarrow
                start={item.secondParent}
                end={item.id}
                headSize={arrowHeadSize ? arrowHeadSize : 2}
                color={childLineColor ? childLineColor : "#ccc"}
                path={lineType ? lineType : "grid"}
                zIndex={-5}
                strokeWidth={1}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Oneline;
