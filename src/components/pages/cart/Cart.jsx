import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProductById, calculateTotalPrice } =
    useContext(CartContext);

  let total = calculateTotalPrice();

  // const deletProducSelec = () => {
  //   Swal.fire({
  //     title: "Seguro quiere Eliminar este Articulo?",
  //     showDenyButton: true,
  //     showCancelButton: false,
  //     confirmButtonText: "Eliminar",
  //     denyButtonText: `Cancelar`
  //   }).then((result) => {

  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       // deleteProductById(product.id)
  //           Swal.fire("Confirmado!", "", "success");
  //     } else if (result.isDenied) {
  //       Swal.fire("Volver al Carrito", "", "info");
  //     }
  //   });
  // }

  const clarCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quiere Vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Confirmado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Volver al Carrito", "", "info");
      }
    });
  };

  return (
    <div>
      {cart.length === 0 && (
        <div className="Cart_texto">
          <h1>Tu carrito de compra esta vacio</h1>
          <img
            src="https://res.cloudinary.com/dheurnsr0/image/upload/v1699482506/carrito-compra-vacio-aislado-sobre-fondo-blanco_188237-86-removebg-preview_sx4shy.png"
            alt=""
          />
        </div>
      )}

      {cart.map((product, sumar, restar) => (
        <div key={product.id} className="carrito_cart">
          <div className="carrito_cart_img">
            <img className="imagen_carrito" src={product.img} alt="" />
          </div>

          <h2>{product.title}</h2>
          <Button onClick={restar}>🔽</Button>

          <h2>Cantidad: {product.quantity}</h2>
          <Button onClick={sumar}>🔼</Button>

          <span>${product.price} </span>
          <h2> Total : $ {product.price * product.quantity}</h2>

          <Button onClick={() => deleteProductById(product.id)}>
            <DeleteSweepIcon />
          </Button>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <div className="Cart_texto ">
            <h2>El total a pagar es: $ {total}</h2>
          </div>
          <div className="boton_carrito">
            <Link to="/checkout">
              <Button variant="contained">Ir A Pagar</Button>
            </Link>

            <Button variant="contained" onClick={clarCartWithAlert}>
              {" "}
              Vaciar Carrito
            </Button>
            <div>
              <Button
                variant="contained"
                disableElevation
                onClick={() => window.history.back()}
              >
                {" "}
                Regresar al detalle
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
