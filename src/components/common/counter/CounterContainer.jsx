import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("pepito");

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  

 
  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};

export default CounterContainer;
