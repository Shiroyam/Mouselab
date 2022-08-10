import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { parserQuery } from "../../utils/helpers/helpersQuery";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { onChangeTime, onClickRelaod } from "../../store/start/reducer";
import styles from "./timer.module.scss";

export const Timer: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { flagStart, time } = useTypesSelector((state) => state.startReducer);

  useEffect(() => {
    const interval = setInterval(() => {
      !flagStart && dispatch(onChangeTime(time >= 1 ? time - 1 : 0));
    }, 1000);

    let { timeQuery } = router.query;
    const timeNumber: number = parserQuery(timeQuery);

    if (time === 0) {
      dispatch(onClickRelaod());
      dispatch(onChangeTime(timeNumber));
    }

    return () => {
      clearInterval(interval);
    };
  }, [flagStart, dispatch, time, router.query]);

  useEffect(() => {
    let { timeQuery } = router.query;
    const timeNumber: number = parserQuery(timeQuery);
    dispatch(onChangeTime(timeNumber));
  }, [router.query]);

  return <div className={styles.timer}>{time}</div>;
};
