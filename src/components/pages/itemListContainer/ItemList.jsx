// import "./ItemList.css";

// const ItemList = () => {
//   return (
//     <div>
//       <h1 className="centrar">Mi Proyecto React</h1>
//       <h2 className="center">William Anez</h2>
//     </div>
//   );
// };

// export default ItemList;

import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section style={{display: "flex", justifyContent:"space-evenly"}}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </section>
  );
};

export default ItemList;