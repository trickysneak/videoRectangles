import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Icon } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const {
    data: { theme },
    actions: { toggleTheme },
  } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
      <Icon
        name="themeToggler"
        color={theme === Theme.DARK ? "white" : "white"}
      />
    </Button>
  );
};
