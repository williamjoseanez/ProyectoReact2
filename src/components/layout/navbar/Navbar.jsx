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
            src="https://res.cloudinary.com/dheurnsr0/image/upload/v1697506519/logo_bgcbzt.png"
            alt="el tambito"
          />
        </Link>

        <ul className="categories">
          <Link to="/">
            <li>Todos</li>
          </Link>
          <Link to="/category/carrera">
            <li>Carreras</li>
          </Link>
          <Link to="/category/curso">
            <li>Cursos</li>
          </Link>
         
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
