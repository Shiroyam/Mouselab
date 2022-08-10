import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button/Button";
import { AiOutlineReload } from "react-icons/ai";
import styles from "./field.module.scss";
import { Circle } from "../circle/Circle";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import {
  onChangeTime,
  onClickRelaod,
  onClickStart,
} from "../../store/start/reducer";
import { Timer } from "../timer/Timer";
import { useRouter } from "next/router";
import { parserQuery } from "../../utils/helpers/helpersQuery";

export const Field: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { flagStart } = useTypesSelector((state) => state.startReducer);

  const { timeQuery } = router.query;
  const timeNumber: number = parserQuery(timeQuery);

  return (
    <>
      <Timer />
      <div style={{ width: "100%", height: 550 }} className={styles.field}>
        {flagStart ? (
          <div
            onClick={() => dispatch(onClickStart())}
            className={styles.start}
          >
            Click to start!
          </div>
        ) : (
          <Circle />
        )}
      </div>
      <Button textButton={true}>
        <AiOutlineReload
          onClick={() => (
            dispatch(onClickRelaod()), dispatch(onChangeTime(timeNumber))
          )}
          className={styles.reload}
        />
      </Button>
    </>
  );
};
