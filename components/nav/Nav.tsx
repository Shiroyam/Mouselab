import { FC } from "react";
import { BiMouseAlt, BiUser, BiCrown } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import styles from "./nav.module.scss";
import Link from "next/link";
import { Button } from "../ui/button/Button";

export const Nav: FC = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link href="/">
          <Button textButton={true}>
            <BiMouseAlt className={styles.logo} />
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/">
          <Button textButton={true}>
            <BiCrown className={styles.logo} />
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/setting">
          <Button textButton={true}>
            <AiOutlineSetting className={styles.logo} />
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <Button textButton={true}>
            <BiUser className={styles.logo} />
          </Button>
        </Link>
      </li>
    </ul>
  );
};
