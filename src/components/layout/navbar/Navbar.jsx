
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <>
    <div className={"containerNavbar"}>
    {/* <Link to="/"> */}
      <img
        className="logo"
        src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg"
        alt="el tambito"
      />
    
      <ul className="categories">
        <li>Ofertas</li>
        <li>Promocioness</li>
        <li>Fiambres</li>
        <li>Almacen</li>
        <li>Bebidas</li>
      </ul>
   
      <CartWidget />
      </div>
      </>
  );
};
