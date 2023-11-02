import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, calculateTotalPrice } =
    useContext(CartContext);

  let total = calculateTotalPrice();

  return (
    <div>
      <div className="Cart_texto">
        <h1>Estas visitando el Carrrido de compras</h1>
      </div>

      {cart.map((product) => (
        <div key={product.id} className="carrito_cart">
          <div className="carrito_cart_img">
            <img className="imagen_carrito" src={product.img} alt="" />
          </div>
          <h2>{product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <h2>$ {product.price}</h2>
          <Button onClick={() => deleteProductById(product.id)}>🗑️❌</Button>
        </div>
      ))}
      <div className="Cart_texto ">
        <h2>El total a pagar es: $ {total}</h2>
      </div>
      <div className="boton_carrito">
        <Link to="/checkout">
          <Button variant="contained">Ir A Pagar</Button>
        </Link>
        <Button variant="contained" onClick={clearCart}>
          {" "}
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

export default Cart;
