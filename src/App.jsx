import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import MaterialUi from "./components/materialUi/MaterialUi";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo={` "Bienvenidos!!!"`} />
      <CounterContainer />
      <MaterialUi />
    </>
  );
}

export default App;
