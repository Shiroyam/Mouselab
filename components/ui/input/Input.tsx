import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: FC<IInput> = ({
  placeholder,
  className,
  ...props
}: IInput) => {
  return (
    <input
      className={cn(styles.input, className)}
      placeholder={placeholder}
      type="text"
      {...props}
    ></input>
  );
};
