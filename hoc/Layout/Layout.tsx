import { FC, ReactNode } from "react";
import { Config } from "../../components/config/Config";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Nav } from "../../components/nav/Nav";
import styles from "./layout.module.scss";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
        <Nav />
      </div>
      <div className={styles.config}>
        <Config />
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
