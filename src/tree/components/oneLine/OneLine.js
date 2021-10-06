import styles from "./OneLine.module.css";
import classNames from "classnames";
import Xarrow from "react-xarrows";
import { useEffect, useState } from "react";

const Oneline = ({ id, name, gender, spouse, children, parentId, childs }) => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const hasChildren = children && children.length;

  function getNewPosition() {
    setX(x + 100);
    setY(y + 100);
  }
  // useEffect(() => {
  //   getNewPosition();
  // }, [x, y]);
  return (
    <div style={{ position: "relative" }}>
      <div
        id={id}
        // style={{ position: "relative" }}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, childrens_${childs}`}
      >
        {name}
        {spouse}
      </div>
      {hasChildren
        ? children.map((item, key) => (
            <div
              className="test1"
              style={{
                padding: "30px",
                position: "absolute",
                top: y,
                left: 100 * key,
              }}
            >
              <Oneline
                key={item.id}
                {...item}
                getNewPosition={getNewPosition}
              />
              <Xarrow
                start={item.parentId} //can be react ref
                end={item.id} //or an id
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Oneline;
