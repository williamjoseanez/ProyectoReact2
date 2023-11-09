import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

  
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dheurnsr0/image/upload/v1699448231/Imagen_de_WhatsApp_2023-11-08_a_las_09.38.23_98bb59e9-removebg-preview_dcbooe.png"
            alt="el tambito"
          />
        </Link>

        <ul className="categories">
          <Link to="/">
            <li>Todos</li>
          </Link>
          <Link to="/category/promociones">
            <li>Promociones</li>
          </Link>
          <Link to="/category/granja">
            <li>Granja</li>
          </Link>
          <Link to="/category/almacen">
            <li>Almacen</li>
          </Link>
         
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
