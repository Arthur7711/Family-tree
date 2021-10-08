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
}) => {
  const [y, setY] = useState(100);
  const hasChildren = children && children.length;

  function getNewPosition() {
    setY(y + 100);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ width: WIDTH, height: HEIGHT }}
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, childrens_${childs}`}
      >
        {name}
      </div>
      {spouse && (
        <Xarrow
          color="blue"
          headSize={2}
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
                left: 100 * key,
              }}
            >
              <Oneline
                WIDTH={WIDTH}
                HEIGHT={HEIGHT}
                {...item}
                getNewPosition={getNewPosition}
              />
              <Xarrow
                start={item.parentId}
                end={item.id}
                headSize={2}
                color="#ccc"
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Oneline;
