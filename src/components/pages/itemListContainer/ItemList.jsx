import ProductCard from "../../common/productCard/ProductCard";
import "./error.css";

const ItemList = ({ items }) => {
  return (
    <div className="items_List">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
