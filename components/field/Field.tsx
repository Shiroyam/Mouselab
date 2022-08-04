import { FC } from "react";
import styles from "./field.module.scss";

export const Field: FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }} className={styles.field}>
      <div className={styles.start}>Click to start!</div>
    </div>
  );
};
