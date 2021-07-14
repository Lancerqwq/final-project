import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, addBook, removeBook } from "../../../Redux/actions";
import { HTTPService } from "../../../api/HTTPService";
import { useStyles } from "./styles";
import SimpleSlider from "../Carousel";

function RecipeReviewCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (id) => {
    dispatch(addBook(id));
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  useEffect(() => {
    if (books.length === 0) {
      HTTPService.getRequest("books?_limit=6").then((data) => {
        const mapedData = data.map((item) => ({
          ...item,
          isAdded: false,
        }));
        dispatch(fetchBooks(mapedData));
      });
    }
  }, []);

  return (
    <>
      <SimpleSlider />

      <div className={classes.wrap}>
        {books.length === 0 ? (
          <CircularProgress />
        ) : (
          books.map((item) => (
            <Card key={item.id} className={classes.root}>
              <Typography className={classes.cardHead} component="h1">
                {item.title}
              </Typography>
              <Link to={`/books/id=${item.id}`}>
                <CardMedia
                  className={classes.media}
                  image={item.imagelink}
                  title="Paella dish"
                />
              </Link>
              <CardContent className={classes.info}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Country: {item.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Language: {item.language}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Year: {item.year}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to basket"
                  onClick={() => handleAddBook(item.id)}
                  // color={item.isAdded ? "secondary" : "primary"}
                  disabled={item.isAdded}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classes.expand}
                  onClick={() => handleRemoveBook(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))
        )}
      </div>
    </>
  );
}

export default RecipeReviewCard;
