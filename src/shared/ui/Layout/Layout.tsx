import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={classNames(cls.Layout, {}, [])}>{children}</div>
);
