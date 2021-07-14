import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeBook } from "../../Redux/actions";
import { useStyles } from "./styles";

function CardPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <divc className={classes.wrap}>
      {cart.map((item) => (
        <Card key={item.id} className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {item.title}
            </Typography>
          </CardContent>
          <IconButton
            className={classes.expand}
            onClick={() => handleRemoveBook(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </divc>
  );
}

export default CardPage;
