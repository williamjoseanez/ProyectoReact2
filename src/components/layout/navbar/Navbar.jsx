import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        <ul className={`categories ${isMenuOpen ? "show" : ""}`}>
          <Link to="/">
            <li onClick={() => setIsMenuOpen(false)}>Todos</li>
          </Link>
          <Link to="/category/promociones">
            <li onClick={() => setIsMenuOpen(false)}>Promociones</li>
          </Link>
          <Link to="/category/granja">
            <li onClick={() => setIsMenuOpen(false)}>Granja</li>
          </Link>
          <Link to="/category/almacen">
            <li onClick={() => setIsMenuOpen(false)}>Almacen</li>
          </Link>
        </ul>

        <CartWidget />

        {/* Botón de hamburguesa */}
        <MenuIcon className="menuIcon" onClick={toggleMenu} />
      </div>
    </>
  );
};
