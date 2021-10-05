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
          <div style={{ padding: "30px", border: "2px solid green" }}>
            <Oneline className={item.id} key={item.id} {...item} />
          </div>
        ))}
    </>
  );
};

export default Oneline;
