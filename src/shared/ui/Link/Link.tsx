import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Link.module.scss";

interface AppLinkProps {
  to: string;
  children: ReactNode;
}

export const AppLink = ({ to, children }: AppLinkProps) => (
  <Link className={classNames(cls.Link, {}, [])} to={to}>
    {children}
  </Link>
);
