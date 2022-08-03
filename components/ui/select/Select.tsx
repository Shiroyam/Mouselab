import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import styles from "./select.module.scss";
import cn from "classnames";

interface ISelect
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  classNames?: string;
}

export const Select: FC<ISelect> = ({
  children,
  classNames,
  ...props
}: ISelect) => {
  return (
    <select className={cn(styles.select, classNames)} {...props}>
      {children}
    </select>
  );
};
