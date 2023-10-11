import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
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
    </BrowserRouter>
  );
}

export default App;
