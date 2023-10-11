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
         <Link to="/">
            <li>Productos</li>
          </Link>
          <Link to="/category/promociones">
            <li>Promociones</li>
          </Link>
          <Link to="/category/fiambres">
          <li>Fiambres</li>
          </Link>
          <Link to="category/almacen">
        <li>Almacen</li>
          </Link>
          <Link to="category/bebidas">
      <li>Bebidas</li>
      </Link>
        </ul>

        <CartWidget />
      </div>
   
    </>
  );
};
