import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseconfig";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      // aca con este let ocultamos el producto que no tenga stock
      let productsFiltrado = newArray.filter((elemento) => elemento.stock > 0);

      setItems(productsFiltrado);
    });
  }, [categoryName]);

  return (
    <>
      {/* aplicamos ternario para la pagina */}
      {items.length === 0 ? (
        <div>
          <div style={{ display: "flex", gap: 20, padding: 32 }}>
            <div>
              <Skeleton variant="rectangular" width={250} height={118} />
              <Skeleton width="20%" />
              <Skeleton width="30%" />
              <Skeleton variant="text" width={40} height={40} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={250} height={118} />
              <Skeleton width="20%" />
              <Skeleton width="30%" />
              <Skeleton variant="text" width={40} height={40} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={250} height={118} />
              <Skeleton width="20%" />
              <Skeleton width="30%" />
              <Skeleton variant="text" width={40} height={40} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={250} height={118} />
              <Skeleton width="20%" />
              <Skeleton width="30%" />
              <Skeleton variant="text" width={40} height={40} />
            </div>
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
