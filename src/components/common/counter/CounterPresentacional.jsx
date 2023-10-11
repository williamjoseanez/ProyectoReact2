import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="centrar">
      <Button variant="outlined" onClick={sumar}>
        sumar
      </Button>

      <h4> {contador} </h4>

      <Button variant="outlined" onClick={restar}>
        Restar
      </Button>

      <Button
        variant="contained"
        disableElevation
        onClick={() => onAdd(contador)}
      >
        {" "}
        Agregar 🛒🛒🛒
      </Button>
    </div>
  );
};

export default CounterPresentacional;
