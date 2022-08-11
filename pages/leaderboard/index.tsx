import { NextPage } from "next";
import { Table } from "../../components/table/Table";
import styles from "./leaderboard.module.scss";

export const Leaderboard: NextPage = () => {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.table}>
        <div className={styles.title}>Time 15</div>
        <Table />
      </div>
      <div className={styles.table}>
        <div className={styles.title}>Time 30</div>
        <Table />
      </div>
    </div>
  );
};

export default Leaderboard;
