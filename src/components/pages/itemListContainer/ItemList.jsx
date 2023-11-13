import ProductCard from "../../common/productCard/ProductCard";
import "./error.css";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding:26, margin:15 }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
