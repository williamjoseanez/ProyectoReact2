// import ItemList from "./ItemList";

// const ItemListContainer = ({saludo}) => {
  
//   return (
//     <div>
//       <h2 className="center"> Hola, traigo las props {saludo}</h2>
    
//       <ItemList />
//       </div>);
// };

// export default ItemListContainer;
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home");

  useEffect(() => {
    const productosFiltrados = products.filter( product => product.category === categoryName)
   
    const tarea = new Promise((resolve, reject) => {
      resolve( categoryName ? productosFiltrados : products );
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
