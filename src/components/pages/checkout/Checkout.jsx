import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import {serverTimestamp} from "firebase/firestore"

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
 
  });

  const { cart, getTotalprice } = useContext(CartContext)
  
  const total = getTotalprice()

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total,
      date : serverTimestamp()
    }
  };

  return (
    <div>
      bienvenido al Checkout
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />

        <button>enviar</button>
      </form>
    </div>
  );
};

export default Checkout;


// import ReactDOM from 'react-dom';