import React, { useState, useEffect } from "react";
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
import { HTTPService } from "../../../api/HTTPService";
import { useStyles } from "./styles";

function RecipeReviewCard() {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [addCards, setAddCards] = useState([]);
  const [deleteCards, setDeleteCards] = useState([]);

  useEffect(() => {
    HTTPService.getRequest("books?_limit=6").then((data) => setBooks(data));
  }, []);

  return (
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
                onClick={() => setAddCards(item.id)}
              >
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={classes.expand}
                onClick={() => setDeleteCards(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}

export default RecipeReviewCard;
