import { FC } from "react";
import { Button } from "../ui/button/Button";
import { useRouter } from "next/router";
import { configQuantity } from "../../utils/data/quantity.data";
import styles from "./quantity.module.scss";

export const Quantity: FC = () => {
  const router = useRouter();
  return (
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
  );
};
