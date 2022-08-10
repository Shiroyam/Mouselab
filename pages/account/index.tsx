import { NextPage } from "next";
import { Login } from "../../components/login/Login";
import { Register } from "../../components/register/Register";
import styles from "./account.module.scss"


const Account: NextPage = () => {
  return (
    <div className={styles.account}>
      <Register />
      <Login />
    </div>
  );
};

export default Account;
