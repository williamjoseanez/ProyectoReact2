import ProductCard from "../../common/productCard/ProductCard";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <section>
      <div className="itemslist">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
