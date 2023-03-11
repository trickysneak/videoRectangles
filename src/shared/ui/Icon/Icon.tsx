import { classNames } from "shared/lib/classNames/classNames";
import * as Svg from "../../assets/icons";
import cls from "./Icon.module.scss";

type IconNames = "themeToggler";

interface IconProps {
  color?: string;
  name: IconNames;
}

export const Icon = ({ name, color }: IconProps) => {
  const ICONS: Record<IconNames, any> = {
    themeToggler: Svg.ThemeTogglerIcon,
  };

  const Component = ICONS[name];

  return <Component className={classNames(cls.Icon, {}, [])} color={color} />;
};
