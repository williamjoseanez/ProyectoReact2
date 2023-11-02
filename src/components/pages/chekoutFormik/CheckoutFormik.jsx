import { Button, TextField } from "@mui/material";
import "./Checkout.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", telefono: "", email: "" },

    onSubmit: (data) => {
      console.log(data);
    },

    validateOnChange: false,

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
    <div>
      <h2 className="formu_centro">Formulario y Proceso de Pago</h2>
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

        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Link to="/cart">
        <Button variant={"outlined"} type="button">
          Volver al Carrito
        </Button>
        </Link>
      </form>
    </div>
  );
};

export default CheckoutFormik;
