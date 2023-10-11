import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
      <Badge badgeContent={5} showZero color="primary">
        <ShoppingCartIcon color="action" />
        </Badge>
        </Link>
    </div>
  );
};

export default CartWidget;
