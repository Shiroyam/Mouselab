import { FC } from "react";
import { Button } from "../ui/button/Button";
import { Input } from "../ui/input/Input";
import styles from "./login.module.scss";

export const Login: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.header}>login</div>
      <Input
        style={{ height: 35, width: 350 }}
        className={styles.input}
        placeholder="email"
      ></Input>
      <Input
        style={{ height: 35, width: 350 }}
        className={styles.input}
        placeholder="password"
      ></Input>
      <Button style={{ height: 35, width: 350 }}>Sing In</Button>
    </div>
  );
};
