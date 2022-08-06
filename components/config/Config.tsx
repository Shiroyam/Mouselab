import { FC } from "react";
import { Button } from "../ui/button/Button";
import styles from "./config.module.scss";

export const Config: FC = () => {
  return (
    <div>
      <Button textButton={true} textButtunActive={true}>
        time
      </Button>
      <Button textButton={true} textButtunActive={false}>
        quantity
      </Button>
      {true ? ( 
        <div className={styles.quantity}>
          <Button textButton={true} textButtunActive={true}>
            10
          </Button>
          <Button textButton={true} textButtunActive={false}>
            25
          </Button>
          <Button textButton={true} textButtunActive={false}>
            50
          </Button>
          <Button textButton={true} textButtunActive={false}>
            100
          </Button>
        </div>
      ) : (
        <div className={styles.time}>
          <Button textButton={true} textButtunActive={true}>
            15
          </Button>
          <Button textButton={true} textButtunActive={false}>
            30
          </Button>
          <Button textButton={true} textButtunActive={false}>
            60
          </Button>
          <Button textButton={true} textButtunActive={false}>
            120
          </Button>
        </div>
      )}
    </div>
  );
};
