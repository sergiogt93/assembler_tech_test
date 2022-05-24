import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useGifContext } from "../context/Gif/GifContext";
import "./giflist.css";
import { height } from "@mui/system";
import { Typography } from "@mui/material";

export const GifList = () => {
  const { gifs } = useGifContext();

  return (
    gifs &&
    gifs.reverse().map((gif) => (
      <Card
        key={gif._id}
        sx={{ marginTop: 3, marginX: 30 }}
        className="card-img-gif"
      >
        <CardMedia component="img" image={gif.url} className="img-responsive" />
        <CardActions>
          <Typography>{gif.url}</Typography>
        </CardActions>
      </Card>
    ))
  );
};
