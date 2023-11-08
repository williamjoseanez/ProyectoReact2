import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProductCard = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 295, border: 5, borderRadius: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[200], color: "black"}} aria-label="recipe">
                        
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.category}
          subheader={item.duracion}
        />
        <CardMedia
          sx={{width:210, height: 105, margin: 5, borderRadius:5}}
          image={item.img}
          title={`image ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          {/* <Typography variant="" color="text.secondary">
            {item.description}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            $ {item.price} .-
          </Typography>
        </CardContent>
        <CardActions>
          {/*icono de favorito ❤️ */}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* icono de compartir  */}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <Link to={`/itemDetail/${item.id}`}>
            <Button size="mediun" variant="outlined">
              Detalles
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
