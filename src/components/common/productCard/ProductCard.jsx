import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  
  const ProductCard = ({ item }) => {
    return (
      <div className="cardOne">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
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
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Detalles
            </Button>
          </Link>
         
        </CardActions>
      
      </Card>
      </div>
    );
  };
  
  export default ProductCard;
  