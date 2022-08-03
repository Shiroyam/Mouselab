import { FC } from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import styles from "./footer.module.scss";
export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <AiOutlineMail className={styles.logo} />
        <div className={styles.text}>Contact</div>
      </div>
      <div className={styles.wrapper}>
        <FaDonate className={styles.logo} />
        <div className={styles.text}>Support</div>
      </div>
      <div className={styles.wrapper}>
        <AiFillGithub className={styles.logo} />
        <div className={styles.text}>GitHub</div>
      </div>
      <div className={styles.wrapper}>
        <BiGitBranch className={styles.logo} />
        <div className={styles.text}>v1.0.0</div>
      </div>
    </div>
  );
};
