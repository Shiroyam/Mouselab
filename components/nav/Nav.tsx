import { FC } from "react";
import { BiMouseAlt, BiUser } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";
import styles from "./nav.module.scss";

export const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <BiMouseAlt className={styles.logo} />
      <BsKeyboard className={styles.logo} />
      <AiOutlineSetting className={styles.logo} />
      <BiUser className={styles.logo} />
    </div>
  );
};
