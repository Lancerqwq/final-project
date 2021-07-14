import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeBook, plusAmount, minusAmount } from "../../Redux/actions";
import { useStyles } from "./styles";

function CardPage() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [ids, setIds] = useState(null); // will used to postRequest in next task

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  const checkout = (books) => {
    const booksIds = books.map((book) => ({
      id: book.id,
      amount: book.amount,
    }));
    setIds(booksIds);
  };

  return (
    <div className={classes.wrap}>
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        cart.map((item) => (
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
            <CardContent className={classes.amountWrap}>
              <IconButton
                className={classes.t}
                variant="contained"
                color="primary"
                onClick={() => dispatch(minusAmount(item.id))}
                disabled={item.amount === 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography
                className={classes.amount}
                color="textSecondary"
                gutterBottom
              >
                {item.amount}
              </Typography>
              <IconButton
                className={classes.t}
                variant="contained"
                color="primary"
                onClick={() => dispatch(plusAmount(item.id))}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.expand}
                onClick={() => handleRemoveBook(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))
      )}
      <Button
        disabled={cart.length === 0}
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => checkout(cart)}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CardPage;
