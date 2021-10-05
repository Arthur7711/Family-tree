import styles from "./OneLine.module.css";
import classNames from "classnames";

const Oneline = ({ id, name, gender, spouse, children }) => {
  const hasChildren = children && children.length;

  return (
    <>
      <div className={classNames(styles.inner, styles[gender])} title={id}>
        {name}
        {spouse}
      </div>
      {hasChildren &&
        children.map((item) => <Oneline key={item.id} {...item} />)}
    </>
  );
};

export default Oneline;
