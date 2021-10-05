import styles from "./OneLine.module.css";
import classNames from "classnames";

const Oneline = ({ id, name, gender, spouse, children, childs }) => {
  const hasChildren = children && children.length;

  return (
    <>
      <div className={classNames(styles.inner, styles[gender])} title={id}>
        {name}
        {spouse}
      </div>
      {hasChildren &&
        children.map((item) => (
          <div style={{ border: "2px solid green", padding: "30px" }}>
            <Oneline key={item.id} {...item} />
          </div>
        ))}
    </>
  );
};

export default Oneline;
