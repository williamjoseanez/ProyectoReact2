import { ThemeProvider } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { customTheme } from "../themeConfig";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => {
            return <Route key={id} path={path} element={<Element />} />;
          })}
        </Route>
        <Route
          path="*"
          element={
            <div className="noFound">
              <img
                className="noFoundLogo"
                src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg"
              />
              <h1>Not Found, pagina no encontrada!!!</h1>
              <Link to="/">
                <button> volver a la pagina principal</button>
              </Link>
            </div>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;
