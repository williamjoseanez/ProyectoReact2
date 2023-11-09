import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CartSkeleton from "../../common/cartSkeleton/cartSkeleton";
import { db } from "../../../firebaseconfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection( db, "products")

    let consulta = undefined

    if (!categoryName) {
      consulta = productsCollection
    } else {
      consulta = query(productsCollection, where("category", "==", categoryName));
    }

    getDocs(consulta).then(res => {
      let newArray = res.docs.map(product => {
        return {...product.data(), id: product.id}
      })
      setItems(newArray)
    });
  }, [categoryName]);

  return (
    <>
      {/* aplicamos ternario para la pagina */}
      {items.length === 0 ? (
        <div>
          <CartSkeleton />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
