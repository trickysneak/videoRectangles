import { MainPage } from "pages";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
};
