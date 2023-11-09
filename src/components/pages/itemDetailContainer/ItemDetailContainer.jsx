import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";
import Swal from "sweetalert2";
import { db } from "../../../firebaseconfig.js";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState(true);

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);

  // const navigate = useNavigate();

  useEffect(() => {

    let itemCollection = collection(db, "products")

    let refDoc = doc(itemCollection, id)

    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data()})
    } )
  
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(item);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "El producto se agrego correctamente",
      showConfirmButton: false,
      timer: 1000,
    });

    setShowCounter(false);

    // CODIGO hooks PARA NAVEGAR, ACA AL AGREGAR AL CARRITO SE REDIRIGE SOLO A LA PAGINA CARRITO

    // setTimeout(() => {s
    //   navigate("/cart");
    // }, 2000);
  };
  //aca finaliza el codigo hooks para hacer navegar solo cuando le das click en agregar al carrito,
  // arriba de todo esta el const navigate (hooks)
  return (
    <ItemDetail
      showCounter={showCounter}
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
