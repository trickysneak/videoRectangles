import { AppLink } from "shared/ui";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Header.module.scss";

export const Header = () => (
  <div className={cls.Header}>
    <div className={cls.HeaderContainer}>
      <AppLink to="/">Главная</AppLink>
      <ThemeSwitcher />
    </div>
  </div>
);
