import { useRouter } from "next/router";
import { FC } from "react";
import { useAppDispatch } from "../../hook/useTypeSelector";
import { onChangeTime } from "../../store/start/reducer";
import { Button } from "../ui/button/Button";
import styles from "./config.module.scss";

export const Config: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div>
      <Button textButton={true} textButtunActive={true}>
        time
      </Button>
      <Button textButton={true} textButtunActive={false}>
        quantity
      </Button>
      {false ? (
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
          <Button
            onClick={() => (
              dispatch(onChangeTime(15)), router.push({ query: { timeQuery: 15 } })
            )}
            textButton={true}
            textButtunActive={true}
          >
            15
          </Button>
          <Button
            onClick={() => (
              dispatch(onChangeTime(30)), router.push({ query: { timeQuery: 30 } })
            )}
            textButton={true}
            textButtunActive={false}
          >
            30
          </Button>
          <Button
            onClick={() => (
              dispatch(onChangeTime(60)), router.push({ query: { timeQuery: 60 } })
            )}
            textButton={true}
            textButtunActive={false}
          >
            60
          </Button>
          <Button
            onClick={() => (
              dispatch(onChangeTime(120)), router.push({ query: { timeQuery: 120 } })
            )}
            textButton={true}
            textButtunActive={false}
          >
            120
          </Button>
        </div>
      )}
    </div>
  );
};
