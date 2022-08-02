import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  active?: boolean;
}

export const Button: FC<IButton> = ({
  children,
  className,
  active,
  ...props
}: IButton) => {
  return (
    <button
      className={cn(styles.button, className, { [styles.active]: active })}
      {...props}
    >
      {children}
    </button>
  );
};
