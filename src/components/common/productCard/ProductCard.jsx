import {
  Avatar,
  BottomNavigationAction,
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
import { blue } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 295, border: 5, borderRadius: 7, display:'flex', flexDirection:'column', marginBlock:0.5, marginBottom: '2rem'}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blue[200], color: "black" }}
            aria-label="recipe"
          >
            <img
              style={{ width: 50 }}
              className="logo"
              src="https://res.cloudinary.com/dheurnsr0/image/upload/v1699448231/Imagen_de_WhatsApp_2023-11-08_a_las_09.38.23_98bb59e9-removebg-preview_dcbooe.png"
              alt="el tambito"
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
        title={item.category}
        subheader={item.duracion}
      />

      <CardMedia
        sx={{ width: '100%', height: 175, borderRadius: 5}}
        image={item.img}
        title={`image ${item.title}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/*icono de favorito ❤️ */}
        <IconButton
          sx={{
            flexDirection: 'column',
            '@media (min-width: 600px)': {
              flexDirection: 'row',
            },
            color: "blue",
            transition: "color 0.3s",
            "&:hover": {
              color: "#D81B60",
            },
          }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        {/* icono de compartir  */}
        <IconButton
          sx={{
            color: "blue",
            transition: "color 0.3s",
            "&:hover": {
              color: "black",
            },
          }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>

        <Link to={`/itemDetail/${item.id}`}>
          <Button size="mediun" variant="outlined">
            Detalles
          </Button>
        </Link>

        <BottomNavigationAction
          sx={{
            transition: "color 0.3s",
            "&:hover": {
              color: "blue",
            },
          }}
          label="Nearby"
          value="nearby"
          href="https://maps.app.goo.gl/BXjwcnC34NyfXDsN9"
          target="blank"
          icon={<LocationOnIcon />}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
