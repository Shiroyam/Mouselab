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
  textButton?: boolean;
  textButtunActive?: boolean;
}

export const Button: FC<IButton> = ({
  children,
  className,
  active,
  textButton,
  textButtunActive,
  ...props
}: IButton) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.active]: active,
        [styles.textButton]: textButton,
        [styles.textButtunActive]: textButtunActive,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
