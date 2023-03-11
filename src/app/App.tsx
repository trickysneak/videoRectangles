import { Header } from "widgets/Header";
import { classNames } from "shared/lib/classNames/classNames";
import { Layout } from "shared/ui";
import { AppRouter } from "./providers/RouterProvider";
import "./styles/reset.scss";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";

export const App = () => {
  const {
    data: { theme },
  } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
};
