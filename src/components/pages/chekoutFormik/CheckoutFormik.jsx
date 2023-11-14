import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "./Checkout.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const CheckoutFormik = () => {
  const { cart, calculateTotalPrice, clearCart } = useContext(CartContext);
  const total = calculateTotalPrice();

  const [orderId, setOrderId] = useState(null);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", telefono: "", email: "" },

    onSubmit: (data) => {
      let order = {
        buyer: { data },
        items: cart,
        total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });

      clearCart();
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo requerido")
        .min(5, "Minimo 5 caracteres")
        .max(20, "Maximo 20 caractere"),
      telefono: Yup.number("solo se permite numeros").required(
        "Campo requerido"
      ),
      email: Yup.string()
        .required("Campo requerido")
        .email("El Email que esta ingresando es invalido"),
    }),
  });

  console.log(errors);

  return (
    <>
      {orderId ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <Card
            sx={{
              maxWidth: 650,
              marginLeft: "40px",
              marginTop: "45px",
            }}
          >
            <CardContent>
              <Typography variant="h2" style={{ fontSize: "30px" }}>
                ¡Gracias Tu Compra se proceso Correctamente!
                                
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "35px",
                  marginBottom: "25px",
                  marginTop: "20px",
                  marginRight: "20px",
                }}
              >
                Su Numero de Comprobante es: {orderId}
              </Typography>
              <Link to="/" size="small" style={{ marginLeft: "35px" }}>
                <Button variant="contained">Seguir Comprando</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      ) : (
        <form className="form_style" onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            label="Nombre y Apellido"
            variant="filled"
            color="error"
            focused
            helperText={errors.nombre}
            onChange={handleChange}
            error={errors.nombre ? true : false}
          />

          <TextField
            name="telefono"
            label="Telefono"
            variant="filled"
            color="error"
            focused
            helperText={errors.telefono}
            onChange={handleChange}
            error={errors.telefono ? true : false}
          />

          <TextField
            name="email"
            label="Email"
            variant="filled"
            color="error"
            focused
            helperText={errors.email}
            onChange={handleChange}
            error={errors.email ? true : false}
          />

          <Typography>
            <h2>El total a pagar es: $ {total}</h2>
          </Typography>

          <Button variant="contained" type="submit">
            Enviar
          </Button>

          <Link to="/cart">
            <Button variant={"outlined"} type="button">
              Volver al Carrito
            </Button>
          </Link>
        </form>
      )}
    </>
  );
};

export default CheckoutFormik;
