import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<h1> estoy en el carrito</h1>} />
        <Route path="/itemDetail" element={<ItemDetailContainer />} />

        <Route path="*" element={ <div>
          <img src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg" />,
          <h1>Not Found,
          pagina no encontrada!!!</h1>
        </div> } />
        
        
        
      </Routes>
     
    
    </BrowserRouter>
  );
}

export default App;
