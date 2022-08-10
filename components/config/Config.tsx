import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useAppDispatch } from "../../hook/useTypeSelector";
import { onChangeTime } from "../../store/start/reducer";
import { Button } from "../ui/button/Button";
import { configTimes } from "../../utils/data/time.data";
import { configQuantity } from "../../utils/data/quantity.data";
import { parserQuery } from "../../utils/helpers/helpersQuery";
import styles from "./config.module.scss";

export const Config: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  let { timeQuery } = router.query;

  const [flagConfig, setFlagConfig] = useState<boolean>(true);                                                                  
  return (
    <div className={styles.nav                                                                }>                                              
      <Button                                                                                                                               
        onClick={() => setFlagConfig(true)}
        textButton={true}
        textButtunActive={flagConfig}
      >
        time
      </Button>
      <Button
        onClick={() => setFlagConfig(false)}
        textButton={true}
        textButtunActive={!flagConfig}
        disabled
      >
        quantity
      </Button>
      {!flagConfig ? (
        <ul className={styles.quantity}>
          {configQuantity.map((configQuantity) => (
            <>
              <li>
                <Button
                  onClick={() =>
                    router.push({
                      query: { quantityQuery: configQuantity.quantity },
                    })
                  }
                  textButton={true}
                  textButtunActive={false}
                >
                  {configQuantity.quantity}
                </Button>
              </li>
            </>
          ))}
        </ul>
      ) : (
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
      )}
    </div>
  );
};
