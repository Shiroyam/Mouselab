import { FC, useState } from "react";
import { Button } from "../ui/button/Button";
import { AiOutlineReload } from "react-icons/ai";
import styles from "./field.module.scss";

export const Field: FC = () => {
  const [flag, setFlag] = useState<boolean>(true);

  return (
    <>
      <div style={{ width: "100%", height: 550 }} className={styles.field}>
        {flag && (
          <div onClick={() => setFlag(false)} className={styles.start}>
            Click to start!
          </div>
        )}
      </div>
      <Button textButton={true}>
        <AiOutlineReload
          onClick={() => setFlag(true)}
          className={styles.reload}
        />
      </Button>
    </>
  );
};
