import styles from "./HeaderTitle.module.css";

const HeaderTitle = ({ primaryTitle, secondaryTitle,totalOrders }) => {
  return (
    <div className={styles.container}>
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle}</div>
      <div> {totalOrders}</div>
    </div>
  );
};

export default HeaderTitle;
