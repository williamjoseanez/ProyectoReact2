import { Button } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import MaterialUi from "../../materialUi/MaterialUi";
import "./itemdetail.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="detalle">
      <h2>{productSelected.title}</h2>
      <img className="noFoundLogo" src={productSelected.img} alt="productos" />
      <h3>{productSelected.description}</h3>
      <h4>{productSelected.detalle}</h4>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
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
      <MaterialUi />
    </div>
  );
};
