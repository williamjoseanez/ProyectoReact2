import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock.js";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();


  const { addToCart } = useContext(CartContext)
  

  // const navigate = useNavigate();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      reject("error");
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };
   addToCart(item)
    // CODIGO hooks PARA NAVEGAR, ACA AL AGREGAR AL CARRITO SE REDIRIGE SOLO A LA PAGINA CARRITO

    // setTimeout(() => {
    //   navigate("/cart");
    // }, 2000);
  };
  //aca finaliza el codigo hooks para hacer navegar solo cuando le das click en agregar al carrito,
  // arriba de todo esta el const navigate (hooks)
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
