import { FC } from "react";
import { Button } from "../ui/button/Button";
import { onChangeTime } from "../../store/start/reducer";
import { configTimes } from "../../utils/data/time.data";
import { parserQuery } from "../../utils/helpers/helpersQuery";
import { useAppDispatch } from "../../hook/useTypeSelector";
import { useRouter } from "next/router";
import styles from "./time.module.scss";

export const Time: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  let { timeQuery } = router.query;

  return (
    <ul className={styles.time}>
      {configTimes.map((configTime) => (
        <>
          <li>
            <Button
              onClick={() => (
                dispatch(onChangeTime(15)),
                router.push({ query: { timeQuery: configTime.time } })
              )}
              textButton={true}
              textButtunActive={
                parserQuery(timeQuery) === parserQuery(configTime.query)
              }
            >
              {configTime.time}
            </Button>
          </li>
        </>
      ))}
    </ul>
  );
};
