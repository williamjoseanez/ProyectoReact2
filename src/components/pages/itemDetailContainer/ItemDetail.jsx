import { Button } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import MaterialUi from "../../materialUi/MaterialUi";
import "./itemdetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
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
        <br />
        <h4>
          {productSelected.duracion} hay {productSelected.stock} productos
        </h4>
        <h2 className="product_price">${productSelected.price}</h2>
        <MaterialUi />
        <div style={{ margin: 30 }}>
          {initial && <h4> Agregaste {initial} productos en el carrito 🛒 </h4>}
        </div>
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

      {showCounter ? (
        <div>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <Link to={"/cart"}>
          {" "}
          <Button variant="contained" style={{ margin: 20 }}>
            ir al carrito
          </Button>
        </Link>
      )}
    </div>
  );
};
