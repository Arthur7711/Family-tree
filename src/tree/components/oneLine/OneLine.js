import styles from "./OneLine.module.css";
import classNames from "classnames";
import Xarrow from "react-xarrows";

const Oneline = ({ id, name, gender, spouse, children, parentId, childs }) => {
  const hasChildren = children && children.length;

  return (
    <>
      <div
        id={id}
        className={classNames(styles.inner, styles[gender])}
        title={`id_${id}, spouse_${spouse}, childrens_${childs}`}
      >
        {name}
        {spouse}
      </div>
      {hasChildren
        ? children.map((item) => (
            <div style={{ padding: "30px" }}>
              <Oneline key={item.id} {...item} />
              <Xarrow
                start={item.parentId} //can be react ref
                end={item.id} //or an id
              />
            </div>
          ))
        : null}
    </>
  );
};

export default Oneline;
