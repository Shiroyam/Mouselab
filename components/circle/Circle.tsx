import { FC, useState } from "react";
import { getRandom } from "../../utils/helpers/getRandom";
import cn from "classnames";
import styles from "./circle.module.scss";

export const Circle: FC = () => {
  const [size, setSize] = useState<number>(50);
  const [x, setX] = useState<number>(540);
  const [y, setY] = useState<number>(250);

  const onClick = () => {
    setSize(getRandom(10, 50));
    setX(getRandom(10, 1000));
    setY(getRandom(10, 500));
  };

  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size, top: y, left: x }}
      className={cn(styles.circle)}
    ></div>
  );
};
