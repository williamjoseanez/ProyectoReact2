import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart} = useContext(CartContext);

  return (
    <div className="noFound">
      {/* <img className="noFoundLogo" src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg" /> */}
      <h1>Estas visitando el Carrrido de compras</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <img  src={product.img} alt="" />
          <h2 >{product.title}</h2>
          <h2 >cantidad: {product.quantity}</h2>
          </div>
      ))}
      <Link to="/checkout">
        <Button variant="contained">Ir A Pagar</Button>
      </Link>
      <Button variant="contained" onClick={clearCart}> Vaciar Carrito</Button>
  
    </div>
  );
};

export default Cart;
