import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  theme?: string;
}

export enum ThemeButton {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CLEAR = "clear",
}

export const Button = ({
  children,
  disabled,
  theme,
  ...otherProps
}: ButtonProps) => {
  const MODS: Record<string, boolean> = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, MODS, [cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
