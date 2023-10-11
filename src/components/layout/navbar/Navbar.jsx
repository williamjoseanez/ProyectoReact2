import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/"><img
          className="logo"
          src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg"
          alt="el tambito"
        /></Link>
        

        <ul className="categories">
         <Link to="/pepito">
            <li>Ofertas</li>
          </Link>
          <Link to="/pepito">
            <li>Promocioness</li>
          </Link>
          <Link to="/pepito">
          <li>Fiambres</li>
          </Link>
          <Link to="/pepito">
        <li>Almacen</li>
          </Link>
          <Link to="/pepito">
      <li>Bebidas</li>
      </Link>
        </ul>

        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
