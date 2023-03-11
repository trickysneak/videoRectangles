import { useContext } from "react";
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from "./ThemeContext";

interface ThemeResult {
  data: {
    theme: Theme;
  };
  actions: {
    toggleTheme: () => void;
  };
}

export const useTheme = (): ThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme);
  };

  return {
    data: { theme },
    actions: { toggleTheme },
  };
};
