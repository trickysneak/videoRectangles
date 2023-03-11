import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "shared/config/routeConfig";

export const AppRouter = () => (
  <Suspense fallback="...Loading">
    <Routes>
      {Object.values(routesConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
