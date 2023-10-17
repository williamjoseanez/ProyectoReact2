import { Button } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import MaterialUi from "../../materialUi/MaterialUi";
import "./itemdetail.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="detalle">
      <div>
        <img
          className="noFoundLogo"
          src={productSelected.img}
          alt="productos"
        />
      </div>

      <div className="detalle_producto">
        <h2>{productSelected.title}</h2>
        <h3>{productSelected.description}</h3>
        <h4>{productSelected.detalle}</h4>
        <h4>{productSelected.duracion}</h4>
        <h2 className="product_price">${productSelected.price}</h2>
      
      </div>

      <div>
        <Button
          variant="contained"
          disableElevation
          onClick={() => window.history.back()}
        >
          {" "}
          Regresar atras
        </Button>
      </div>
      <div>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </div>
      <MaterialUi />
    </div>
  );
};
