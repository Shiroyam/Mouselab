import { FC } from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/svg/Logo.svg";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Image className={styles.logo} src={Logo} />
      <div className={styles.text}>MouseLab</div>
    </div>
  );
};
