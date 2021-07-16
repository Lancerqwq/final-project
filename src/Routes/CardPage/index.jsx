import React from "react";
import { Link } from "react-router-dom";
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
import {
  removeBook,
  plusAmount,
  minusAmount,
  checkoutOrder,
} from "../../Redux/actions";
import { useStyles } from "./styles";

function CardPage() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
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
        onClick={() => dispatch(checkoutOrder())}
      >
        <Link className={classes.link} to="/cart/checkout">
          Checkout
        </Link>
      </Button>
    </div>
  );
}

export default CardPage;
