import { FC } from "react";
import { Button } from "../ui/button/Button";
import { Input } from "../ui/input/Input";
import styles from "./register.module.scss";

export const Register: FC = () => {
  return (
    <div className={styles.register}>
      <div className={styles.header}>register</div>
      <Input
        style={{ height: 35, width: 350 }}
        className={styles.input}
        placeholder="username"
      ></Input>
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
      <Input
        style={{ height: 35, width: 350 }}
        className={styles.input}
        placeholder="verify password"
      ></Input>
      <Button style={{ height: 35, width: 350 }}>Sing Up</Button>
    </div>
  );
};
