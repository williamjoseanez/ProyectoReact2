import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>

      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:categoryName" element={ <ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="noFound">
              <img className="noFoundLogo" src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg" />
              ,<h1>Not Found, pagina no encontrada!!!</h1>
              <Link to="/">
                <button> volver a la pagina principal</button>
                </Link>
            </div>
          }
          />
      </Routes>
          </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
