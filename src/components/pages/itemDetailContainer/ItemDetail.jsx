import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="noFound">
      
      <h2>{productSelected.title}</h2>
      <img  className="noFoundLogo" src={productSelected.img} alt="productos" />
      <h3>{productSelected.description }</h3>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} /> 
         </div>
  );
};
