import { Button } from "@mui/material";

const CounterPresentacional = ( {sumar, contador, restar, nombre, setNombre} ) => {

  return (
    <div className="centrar">
      <Button variant="outlined" onClick={sumar}>sumar</Button>
      {/* <button onClick={sumar}>sumar</button> */}
      <h4> {contador} </h4>
      {/* <button onClick={restar}>restar</button> */}
      <Button variant="outlined" onClick={restar}>Restar</Button>
      

      <h4>{nombre}</h4>
      <Button variant="contained" disableElevation onClick={() => setNombre("juancito")}>
      Cambiar nombre</Button>
      {/* <button onClick={()=>setNombre("juancito")}>Cambiar nombre</button> */}
    </div>
  );
};

export default CounterPresentacional;
