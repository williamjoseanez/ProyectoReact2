import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const Cart = () => {
    return (
      <div className="noFound">
        {/* <img className="noFoundLogo" src="https://res.cloudinary.com/dheurnsr0/image/upload/v1696103453/nyhdohjxvy8f4hwltcu9.jpg" /> */}
        <h1>Estas visitando el Carrrido de compras</h1>
        <Link to="/checkout">
        <Button variant="contained">Ir A Pagar</Button>
        </Link>
      </div>
    )
  }
  
  export default Cart