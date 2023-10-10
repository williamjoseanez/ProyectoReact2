import { Login } from "@mui/icons-material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      {/* <h4>EL Tambito</h4> */}
      <img
        className="logo"
        src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg"
        alt="el tamito"
      />

      <ul className="categories">
        <li>Ofertas</li>
        <li>Promocioness</li>
        <li>Fiambres</li>
        <li>Almacen</li>
        <li>Bebidas</li>
      </ul>
      <Login />
      <CartWidget />
    </div>
  );
};
