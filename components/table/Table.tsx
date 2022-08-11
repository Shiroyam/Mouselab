import { FC } from "react";
import styles from "./table.module.scss";

export const Table: FC = () => {
  return (
    <>
    <div className={styles.t1}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td width="5%">#</td>
            <td>name</td>
            <td>point</td>
            <td>miss</td>
            <td>date</td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.column}>
            <td>1</td>
            <td>shiroyam</td>
            <td>321</td>
            <td>323</td>
            <td>14.04.2021</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};
